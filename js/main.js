'use strict';

import * as Vue from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.esm-browser.prod.js';

const app = Vue.createApp({
    data: () => ({
        modal: null,
        modalEl: null,
        sidebarOpened: false,
        data: '',
        ecc: 'L',
        qr: null,
        stepByStep: false,
        forceUTF8: true,

        generating: false,

        config: {
            get theme() {
                return localStorage.getItem('theme') ?? 'system';
            },

            set theme(val) {
                localStorage.setItem('theme', val);
                document.querySelector('html').setAttribute('theme', val);
            },
        }
    }),

    mounted() {
        // Enable all tooltips
        this.createTooltips();

        this.modalEl = document.querySelector('#modal');

        this.modalEl.addEventListener('shown.bs.modal', () => {
            document.querySelector('#modal input')?.focus();
        });

        this.modalEl.addEventListener('hidden.bs.modal', () => {
            this.modal = null;
        });
    },

    computed: {
        getMode() {
            const mode = this.getDataMode();
            return mode === 'alphanumeric' ? 'Letras + Números' : mode === 'numeric' ? 'Números' : mode === 'byte' ? 'Binário (ISO-8859-1)' : mode === 'utf8' ? 'Binário (UTF-8)' : 'Kanji';
        },

        getVersion() {
            const mode = this.getDataMode();
            const version = minVersion(mode === 'utf8' ? preEncodeData(this.data, 'utf8').length : this.data.length, mode, this.ecc);
            if (version <= 0) {
                return 'Dados inválidos.';
            }

            return 'Versão: ' + version;
        },

        getSize() {
            return 'Tamanho: ' + this.getDataSize();
        },
    },

    methods: {
        openModal({type, title, body, primaryButton, closeButton = 'Fechar', onClose = () => { }, onCancel = () => { }, beforeOpen = () => { }}) {
            let interval;

            const open = () => {
                interval !== undefined && clearInterval(interval);

                this.modal = {
                    type,
                    title,
                    body,
                    primaryButton,
                    closeButton,
                    onClose,
                    onCancel,
                };

                beforeOpen();

                const modal = new bootstrap.Modal('#modal', {keyboard: true});
                modal.show();
            };

            interval = setInterval(() => !this.modal && open(), 100);
        },

        alert(body, title = 'Alerta', onClose = () => { }) {
            this.openModal({type: 'alert', title, body, primaryButton: 'OK', onClose});
        },

        confirm(body, title = 'Confirmação', onClose = () => { }, onCancel = () => { }) {
            this.openModal({type: 'confirm', title, body, primaryButton: 'Sim', closeButton: 'Não', onClose, onCancel});
        },

        async generateQRCode() {
            this.generating = true;
            try {
                this.qr = qrCode(this.data, this.ecc, { forceUTF8: this.forceUTF8 });
                await drawQRCode(this.qr, this.stepByStep).then(() => {
                    this.generating = false;
                });
            } catch (err) {
                this.qr = null;
                this.generating = false;
                this.alert(err.message, 'Erro inesperado');
            }
        },

        getDataMode() {
            const mode = detectMode(this.data, this.forceUTF8);
            return mode;
        },

        getDataSize() {
            const mode = this.getDataMode();
            const length = mode === 'utf8' ? preEncodeData(this.data, 'utf8').length : this.data.length;
            return length;
        },

        getMaxLength() {
            const mode = this.getDataMode();
            const max = capacities[40][this.ecc][mode === 'utf8' ? 'byte' : mode];
            return max;
        },

        createTooltips() {
            // Enable all tooltips
            [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]:not([data-bs-original-title])')).forEach(el => {
                new bootstrap.Tooltip(el);
            });
        },
    },
}).directive('select2', {
    twoWay: true,
    beforeMount(el, binding, vnode) {
        function handler(e) {
            el.dispatchEvent(new Event('change', {target: e.target}));
        }

        jQuery(el).select2().on('select2:select', handler).on('select2:unselect', handler);
    },
}).mount('#app');

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom',
});
