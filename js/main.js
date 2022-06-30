'use strict';

import * as Vue from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.esm-browser.prod.js';

/** @type {HTMLCanvasElement} */
let canvas;
let canvas_container;
let ctx;

const app = Vue.createApp({
    data: () => ({
        modal: null,
        modalEl: null,
        sidebarOpened: false,
        data: '',
        ecc: 'L',
        qr: null,
        qrCanvas: null,
        mask: -1,
        zoom: 1,
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

        canvas = document.querySelector('#qr');
        canvas_container = canvas.parentElement;
        ctx = canvas.getContext('2d');
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
            this.qr = null;
            this.mask = -1;

            try {
                this.qr = qrCode(this.data, this.ecc, { forceUTF8: this.forceUTF8 });
                this.scaleCanvas();
                this.qrCanvas = await drawQRCode(this.qr, this.drawQR, this.stepByStep, { onMask: mask => this.mask = mask, onWriteData: (i, j) => { ctx.fillStyle = 'red'; ctx.fillRect(i, j, 1, 1); } });
                this.drawQR(this.qrCanvas.buffer);
                this.mask = this.qrCanvas.mask;
                this.generating = false;
            } catch (err) {
                this.qr = null;
                this.qrCanvas = null;
                this.mask = -1;
                this.generating = false;
                this.alert(err.message, 'Erro inesperado');
            }
        },

        scaleCanvas(cssScale = -1) {
            const factor = 1;

            const size = ((this.qr.version - 1) * 4) + 21;

            this.zoom = cssScale;

            // Set up CSS size.
            if (cssScale === -1) {
                cssScale = Math.ceil(475 / (size + 4 * factor));
            }

            canvas_container.style.setProperty('--scale', '' + cssScale);
            canvas_container.style.setProperty('--size', '' + size * factor);
        },

        async applyMask(mask) {
            if (this.qrCanvas === null) {
                return;
            }

            this.qrCanvas.applyMask(this.mask, true);
            this.qrCanvas.applyMask(mask);
            this.drawQR(this.qrCanvas.buffer);

            this.mask = mask;
        },

        /**
         *
         * @param {number[][]} buffer
         */
        drawQR(buffer) {
            const size = ((this.qr.version - 1) * 4) + 21;

            canvas.width = size;
            canvas.height = size;
            ctx.scale(1, 1);
            ctx.imageSmoothingEnabled = false;
            ctx.translate(0.5, 0.5);
            ctx.clearRect(0, 0, size, size);

            for (let i = 0; i < buffer.length; i++) {
                for (let j = 0; j < buffer[i].length; j++) {
                    if (buffer[i][j]) {
                        ctx.fillStyle = 'black';
                    } else {
                        ctx.fillStyle = 'white';
                    }

                    ctx.fillRect(i, j, 1, 1);
                }
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
