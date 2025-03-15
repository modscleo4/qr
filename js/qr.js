'use strict';

/**
 *
 * @param {number} ms
 * @return {Promise<void>}
 */
async function sleep(ms) {
    // @ts-ignore
    await new Promise((resolve, reject) => setTimeout(() => resolve(true), ms));
}

/** @typedef {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40} Version */

/** @typedef {'L'|'M'|'Q'|'H'} ECC */

/** @typedef {'numeric'|'alphanumeric'|'byte'|'kanji'} Mode */

/**
 * @typedef {object} QR
 * @property {Version} version
 * @property {ECC} ecc
 * @property {Mode} mode
 * @property {string} data
 */

/**
 * @typedef {Object<string, number>}
 */
const utf8_to_iso88591 = {
    //
};

for (let i = 0x00; i <= 0xFF; i++) {
    const utf8 = new TextDecoder('iso-8859-1').decode(new Uint8Array([i]));
    utf8_to_iso88591[utf8] = i;
}

/**
 * @type {Object<string, number>}
 */
const utf8_to_shiftjis = {
    //
};

/**
 *
 * @param {number} val
 * @return {number}
 */
function swapEndianess(val) {
    return ((val & 0xFF) << 8) | ((val >> 8) & 0xFF);
}


for (let i = 0x8140; i <= 0x9FFC; i++) {
    // Shift-JIS is big-endian.
    const utf8 = new TextDecoder('shift-jis').decode(new Uint16Array([swapEndianess(i)]));
    utf8_to_shiftjis[utf8] = i;
}

for (let i = 0xE040; i <= 0xEBBF; i++) {
    // Shift-JIS is big-endian.
    const utf8 = new TextDecoder('shift-jis').decode(new Uint16Array([swapEndianess(i)]));
    utf8_to_shiftjis[utf8] = i;
}

export const capacities = {
    1: {
        L: {
            numeric: 41,
            alphanumeric: 25,
            byte: 17,
            kanji: 10
        },
        M: {
            numeric: 34,
            alphanumeric: 20,
            byte: 14,
            kanji: 8
        },
        Q: {
            numeric: 27,
            alphanumeric: 16,
            byte: 11,
            kanji: 7
        },
        H: {
            numeric: 17,
            alphanumeric: 10,
            byte: 7,
            kanji: 4
        }
    },
    2: {
        L: {
            numeric: 77,
            alphanumeric: 47,
            byte: 32,
            kanji: 20
        },
        M: {
            numeric: 63,
            alphanumeric: 38,
            byte: 26,
            kanji: 16
        },
        Q: {
            numeric: 48,
            alphanumeric: 29,
            byte: 20,
            kanji: 12
        },
        H: {
            numeric: 34,
            alphanumeric: 20,
            byte: 14,
            kanji: 8
        }
    },
    3: {
        L: {
            numeric: 127,
            alphanumeric: 77,
            byte: 53,
            kanji: 32
        },
        M: {
            numeric: 101,
            alphanumeric: 61,
            byte: 42,
            kanji: 26
        },
        Q: {
            numeric: 77,
            alphanumeric: 47,
            byte: 32,
            kanji: 20
        },
        H: {
            numeric: 58,
            alphanumeric: 35,
            byte: 24,
            kanji: 15
        }
    },
    4: {
        L: {
            numeric: 187,
            alphanumeric: 114,
            byte: 78,
            kanji: 48
        },
        M: {
            numeric: 149,
            alphanumeric: 90,
            byte: 62,
            kanji: 38
        },
        Q: {
            numeric: 111,
            alphanumeric: 67,
            byte: 46,
            kanji: 28
        },
        H: {
            numeric: 82,
            alphanumeric: 50,
            byte: 34,
            kanji: 21
        }
    },
    5: {
        L: {
            numeric: 255,
            alphanumeric: 154,
            byte: 106,
            kanji: 65
        },
        M: {
            numeric: 202,
            alphanumeric: 122,
            byte: 84,
            kanji: 52
        },
        Q: {
            numeric: 144,
            alphanumeric: 87,
            byte: 60,
            kanji: 37
        },
        H: {
            numeric: 106,
            alphanumeric: 64,
            byte: 44,
            kanji: 27
        }
    },
    6: {
        L: {
            numeric: 322,
            alphanumeric: 195,
            byte: 134,
            kanji: 82
        },
        M: {
            numeric: 255,
            alphanumeric: 154,
            byte: 106,
            kanji: 65
        },
        Q: {
            numeric: 178,
            alphanumeric: 108,
            byte: 74,
            kanji: 45
        },
        H: {
            numeric: 139,
            alphanumeric: 84,
            byte: 58,
            kanji: 36
        }
    },
    7: {
        L: {
            numeric: 370,
            alphanumeric: 224,
            byte: 154,
            kanji: 95
        },
        M: {
            numeric: 293,
            alphanumeric: 178,
            byte: 122,
            kanji: 75
        },
        Q: {
            numeric: 207,
            alphanumeric: 125,
            byte: 86,
            kanji: 53
        },
        H: {
            numeric: 154,
            alphanumeric: 93,
            byte: 64,
            kanji: 39
        }
    },
    8: {
        L: {
            numeric: 461,
            alphanumeric: 279,
            byte: 192,
            kanji: 118
        },
        M: {
            numeric: 365,
            alphanumeric: 221,
            byte: 152,
            kanji: 93
        },
        Q: {
            numeric: 259,
            alphanumeric: 157,
            byte: 108,
            kanji: 66
        },
        H: {
            numeric: 202,
            alphanumeric: 122,
            byte: 84,
            kanji: 52
        }
    },
    9: {
        L: {
            numeric: 552,
            alphanumeric: 335,
            byte: 230,
            kanji: 141
        },
        M: {
            numeric: 432,
            alphanumeric: 262,
            byte: 180,
            kanji: 111
        },
        Q: {
            numeric: 312,
            alphanumeric: 189,
            byte: 130,
            kanji: 80
        },
        H: {
            numeric: 235,
            alphanumeric: 143,
            byte: 98,
            kanji: 60
        }
    },
    10: {
        L: {
            numeric: 652,
            alphanumeric: 395,
            byte: 271,
            kanji: 167
        },
        M: {
            numeric: 513,
            alphanumeric: 311,
            byte: 213,
            kanji: 131
        },
        Q: {
            numeric: 364,
            alphanumeric: 221,
            byte: 151,
            kanji: 93
        },
        H: {
            numeric: 288,
            alphanumeric: 174,
            byte: 119,
            kanji: 74
        }
    },
    11: {
        L: {
            numeric: 772,
            alphanumeric: 468,
            byte: 321,
            kanji: 198
        },
        M: {
            numeric: 604,
            alphanumeric: 366,
            byte: 251,
            kanji: 155
        },
        Q: {
            numeric: 427,
            alphanumeric: 259,
            byte: 177,
            kanji: 109
        },
        H: {
            numeric: 331,
            alphanumeric: 200,
            byte: 137,
            kanji: 85
        }
    },
    12: {
        L: {
            numeric: 883,
            alphanumeric: 535,
            byte: 367,
            kanji: 226
        },
        M: {
            numeric: 691,
            alphanumeric: 419,
            byte: 287,
            kanji: 177
        },
        Q: {
            numeric: 489,
            alphanumeric: 296,
            byte: 203,
            kanji: 125
        },
        H: {
            numeric: 374,
            alphanumeric: 227,
            byte: 155,
            kanji: 96
        }
    },
    13: {
        L: {
            numeric: 1022,
            alphanumeric: 619,
            byte: 425,
            kanji: 262
        },
        M: {
            numeric: 796,
            alphanumeric: 483,
            byte: 331,
            kanji: 204
        },
        Q: {
            numeric: 580,
            alphanumeric: 352,
            byte: 241,
            kanji: 149
        },
        H: {
            numeric: 427,
            alphanumeric: 259,
            byte: 177,
            kanji: 109
        }
    },
    14: {
        L: {
            numeric: 1101,
            alphanumeric: 667,
            byte: 458,
            kanji: 282
        },
        M: {
            numeric: 871,
            alphanumeric: 528,
            byte: 362,
            kanji: 223
        },
        Q: {
            numeric: 621,
            alphanumeric: 376,
            byte: 258,
            kanji: 159
        },
        H: {
            numeric: 468,
            alphanumeric: 283,
            byte: 194,
            kanji: 120
        }
    },
    15: {
        L: {
            numeric: 1250,
            alphanumeric: 758,
            byte: 520,
            kanji: 320
        },
        M: {
            numeric: 991,
            alphanumeric: 600,
            byte: 412,
            kanji: 254
        },
        Q: {
            numeric: 703,
            alphanumeric: 426,
            byte: 292,
            kanji: 180
        },
        H: {
            numeric: 530,
            alphanumeric: 321,
            byte: 220,
            kanji: 136
        }
    },
    16: {
        L: {
            numeric: 1408,
            alphanumeric: 854,
            byte: 586,
            kanji: 361
        },
        M: {
            numeric: 1082,
            alphanumeric: 656,
            byte: 450,
            kanji: 277
        },
        Q: {
            numeric: 775,
            alphanumeric: 470,
            byte: 322,
            kanji: 198
        },
        H: {
            numeric: 602,
            alphanumeric: 365,
            byte: 250,
            kanji: 154
        }
    },
    17: {
        L: {
            numeric: 1548,
            alphanumeric: 938,
            byte: 644,
            kanji: 397
        },
        M: {
            numeric: 1212,
            alphanumeric: 734,
            byte: 504,
            kanji: 310
        },
        Q: {
            numeric: 876,
            alphanumeric: 531,
            byte: 364,
            kanji: 224
        },
        H: {
            numeric: 674,
            alphanumeric: 408,
            byte: 280,
            kanji: 173
        }
    },
    18: {
        L: {
            numeric: 1725,
            alphanumeric: 1046,
            byte: 718,
            kanji: 442
        },
        M: {
            numeric: 1346,
            alphanumeric: 816,
            byte: 560,
            kanji: 345
        },
        Q: {
            numeric: 948,
            alphanumeric: 574,
            byte: 394,
            kanji: 243
        },
        H: {
            numeric: 746,
            alphanumeric: 452,
            byte: 310,
            kanji: 191
        }
    },
    19: {
        L: {
            numeric: 1903,
            alphanumeric: 1153,
            byte: 792,
            kanji: 488
        },
        M: {
            numeric: 1500,
            alphanumeric: 909,
            byte: 624,
            kanji: 384
        },
        Q: {
            numeric: 1063,
            alphanumeric: 644,
            byte: 442,
            kanji: 272
        },
        H: {
            numeric: 813,
            alphanumeric: 493,
            byte: 338,
            kanji: 208
        }
    },
    20: {
        L: {
            numeric: 2061,
            alphanumeric: 1249,
            byte: 858,
            kanji: 528
        },
        M: {
            numeric: 1600,
            alphanumeric: 970,
            byte: 666,
            kanji: 410
        },
        Q: {
            numeric: 1159,
            alphanumeric: 702,
            byte: 482,
            kanji: 297
        },
        H: {
            numeric: 919,
            alphanumeric: 557,
            byte: 382,
            kanji: 235
        }
    },
    21: {
        L: {
            numeric: 2232,
            alphanumeric: 1352,
            byte: 929,
            kanji: 572
        },
        M: {
            numeric: 1708,
            alphanumeric: 1035,
            byte: 711,
            kanji: 438
        },
        Q: {
            numeric: 1224,
            alphanumeric: 742,
            byte: 509,
            kanji: 314
        },
        H: {
            numeric: 969,
            alphanumeric: 587,
            byte: 403,
            kanji: 248
        }
    },
    22: {
        L: {
            numeric: 2409,
            alphanumeric: 1460,
            byte: 1003,
            kanji: 618
        },
        M: {
            numeric: 1872,
            alphanumeric: 1134,
            byte: 779,
            kanji: 480
        },
        Q: {
            numeric: 1358,
            alphanumeric: 823,
            byte: 565,
            kanji: 348
        },
        H: {
            numeric: 1056,
            alphanumeric: 640,
            byte: 439,
            kanji: 270
        }
    },
    23: {
        L: {
            numeric: 2620,
            alphanumeric: 1588,
            byte: 1091,
            kanji: 672
        },
        M: {
            numeric: 2059,
            alphanumeric: 1248,
            byte: 857,
            kanji: 528
        },
        Q: {
            numeric: 1468,
            alphanumeric: 890,
            byte: 611,
            kanji: 376
        },
        H: {
            numeric: 1108,
            alphanumeric: 672,
            byte: 461,
            kanji: 284
        }
    },
    24: {
        L: {
            numeric: 2812,
            alphanumeric: 1704,
            byte: 1171,
            kanji: 721
        },
        M: {
            numeric: 2188,
            alphanumeric: 1326,
            byte: 911,
            kanji: 561
        },
        Q: {
            numeric: 1588,
            alphanumeric: 963,
            byte: 661,
            kanji: 407
        },
        H: {
            numeric: 1228,
            alphanumeric: 744,
            byte: 511,
            kanji: 315
        }
    },
    25: {
        L: {
            numeric: 3057,
            alphanumeric: 1853,
            byte: 1273,
            kanji: 784
        },
        M: {
            numeric: 2395,
            alphanumeric: 1451,
            byte: 997,
            kanji: 614
        },
        Q: {
            numeric: 1718,
            alphanumeric: 1041,
            byte: 715,
            kanji: 440
        },
        H: {
            numeric: 1286,
            alphanumeric: 779,
            byte: 535,
            kanji: 330
        }
    },
    26: {
        L: {
            numeric: 3283,
            alphanumeric: 1990,
            byte: 1367,
            kanji: 842
        },
        M: {
            numeric: 2544,
            alphanumeric: 1542,
            byte: 1059,
            kanji: 652
        },
        Q: {
            numeric: 1804,
            alphanumeric: 1094,
            byte: 751,
            kanji: 462
        },
        H: {
            numeric: 1425,
            alphanumeric: 864,
            byte: 593,
            kanji: 365
        }
    },
    27: {
        L: {
            numeric: 3517,
            alphanumeric: 2132,
            byte: 1465,
            kanji: 902
        },
        M: {
            numeric: 2701,
            alphanumeric: 1637,
            byte: 1125,
            kanji: 692
        },
        Q: {
            numeric: 1933,
            alphanumeric: 1172,
            byte: 805,
            kanji: 496
        },
        H: {
            numeric: 1501,
            alphanumeric: 910,
            byte: 625,
            kanji: 385
        }
    },
    28: {
        L: {
            numeric: 3669,
            alphanumeric: 2223,
            byte: 1528,
            kanji: 940
        },
        M: {
            numeric: 2857,
            alphanumeric: 1732,
            byte: 1190,
            kanji: 732
        },
        Q: {
            numeric: 2085,
            alphanumeric: 1263,
            byte: 868,
            kanji: 534
        },
        H: {
            numeric: 1581,
            alphanumeric: 958,
            byte: 658,
            kanji: 405
        }
    },
    29: {
        L: {
            numeric: 3909,
            alphanumeric: 2369,
            byte: 1628,
            kanji: 1002
        },
        M: {
            numeric: 3035,
            alphanumeric: 1839,
            byte: 1264,
            kanji: 778
        },
        Q: {
            numeric: 2181,
            alphanumeric: 1322,
            byte: 908,
            kanji: 559
        },
        H: {
            numeric: 1677,
            alphanumeric: 1016,
            byte: 698,
            kanji: 430
        }
    },
    30: {
        L: {
            numeric: 4158,
            alphanumeric: 2520,
            byte: 1732,
            kanji: 1066
        },
        M: {
            numeric: 3289,
            alphanumeric: 1994,
            byte: 1370,
            kanji: 843
        },
        Q: {
            numeric: 2358,
            alphanumeric: 1429,
            byte: 982,
            kanji: 604
        },
        H: {
            numeric: 1782,
            alphanumeric: 1080,
            byte: 742,
            kanji: 457
        }
    },
    31: {
        L: {
            numeric: 4417,
            alphanumeric: 2677,
            byte: 1840,
            kanji: 1132
        },
        M: {
            numeric: 3486,
            alphanumeric: 2113,
            byte: 1452,
            kanji: 894
        },
        Q: {
            numeric: 2473,
            alphanumeric: 1499,
            byte: 1030,
            kanji: 634
        },
        H: {
            numeric: 1897,
            alphanumeric: 1150,
            byte: 790,
            kanji: 486
        }
    },
    32: {
        L: {
            numeric: 4686,
            alphanumeric: 2840,
            byte: 1952,
            kanji: 1201
        },
        M: {
            numeric: 3693,
            alphanumeric: 2238,
            byte: 1538,
            kanji: 947
        },
        Q: {
            numeric: 2670,
            alphanumeric: 1618,
            byte: 1112,
            kanji: 684
        },
        H: {
            numeric: 2022,
            alphanumeric: 1226,
            byte: 842,
            kanji: 518
        }
    },
    33: {
        L: {
            numeric: 4965,
            alphanumeric: 3009,
            byte: 2068,
            kanji: 1273
        },
        M: {
            numeric: 3909,
            alphanumeric: 2369,
            byte: 1628,
            kanji: 1002
        },
        Q: {
            numeric: 2805,
            alphanumeric: 1700,
            byte: 1168,
            kanji: 719
        },
        H: {
            numeric: 2157,
            alphanumeric: 1307,
            byte: 898,
            kanji: 553
        }
    },
    34: {
        L: {
            numeric: 5253,
            alphanumeric: 3183,
            byte: 2188,
            kanji: 1347
        },
        M: {
            numeric: 4134,
            alphanumeric: 2506,
            byte: 1722,
            kanji: 1060
        },
        Q: {
            numeric: 2949,
            alphanumeric: 1787,
            byte: 1228,
            kanji: 756
        },
        H: {
            numeric: 2301,
            alphanumeric: 1394,
            byte: 958,
            kanji: 590
        }
    },
    35: {
        L: {
            numeric: 5529,
            alphanumeric: 3351,
            byte: 2303,
            kanji: 1417
        },
        M: {
            numeric: 4343,
            alphanumeric: 2632,
            byte: 1809,
            kanji: 1113
        },
        Q: {
            numeric: 3081,
            alphanumeric: 1867,
            byte: 1283,
            kanji: 790
        },
        H: {
            numeric: 2361,
            alphanumeric: 1431,
            byte: 983,
            kanji: 605
        }
    },
    36: {
        L: {
            numeric: 5836,
            alphanumeric: 3537,
            byte: 2431,
            kanji: 1496
        },
        M: {
            numeric: 4588,
            alphanumeric: 2780,
            byte: 1911,
            kanji: 1176
        },
        Q: {
            numeric: 3244,
            alphanumeric: 1966,
            byte: 1351,
            kanji: 832
        },
        H: {
            numeric: 2524,
            alphanumeric: 1530,
            byte: 1051,
            kanji: 647
        }
    },
    37: {
        L: {
            numeric: 6153,
            alphanumeric: 3729,
            byte: 2563,
            kanji: 1577
        },
        M: {
            numeric: 4775,
            alphanumeric: 2894,
            byte: 1989,
            kanji: 1224
        },
        Q: {
            numeric: 3417,
            alphanumeric: 2071,
            byte: 1423,
            kanji: 876
        },
        H: {
            numeric: 2625,
            alphanumeric: 1591,
            byte: 1093,
            kanji: 673
        }
    },
    38: {
        L: {
            numeric: 6479,
            alphanumeric: 3927,
            byte: 2699,
            kanji: 1661
        },
        M: {
            numeric: 5039,
            alphanumeric: 3054,
            byte: 2099,
            kanji: 1292
        },
        Q: {
            numeric: 3599,
            alphanumeric: 2181,
            byte: 1499,
            kanji: 923
        },
        H: {
            numeric: 2735,
            alphanumeric: 1658,
            byte: 1139,
            kanji: 701
        }
    },
    39: {
        L: {
            numeric: 6743,
            alphanumeric: 4087,
            byte: 2809,
            kanji: 1729
        },
        M: {
            numeric: 5313,
            alphanumeric: 3220,
            byte: 2213,
            kanji: 1362
        },
        Q: {
            numeric: 3791,
            alphanumeric: 2298,
            byte: 1579,
            kanji: 972
        },
        H: {
            numeric: 2927,
            alphanumeric: 1774,
            byte: 1219,
            kanji: 750
        }
    },
    40: {
        L: {
            numeric: 7089,
            alphanumeric: 4296,
            byte: 2953,
            kanji: 1817
        },
        M: {
            numeric: 5596,
            alphanumeric: 3391,
            byte: 2331,
            kanji: 1435
        },
        Q: {
            numeric: 3993,
            alphanumeric: 2420,
            byte: 1663,
            kanji: 1024
        },
        H: {
            numeric: 3057,
            alphanumeric: 1852,
            byte: 1273,
            kanji: 784
        }
    }
};

/**
 *
 * @param {number} length
 * @param {Mode|'utf-8'} mode
 * @param {ECC} ecc
 * @return {Version|null}
 */
export function minVersion(length, mode, ecc) {
    if (mode === 'utf-8') {
        mode = 'byte';
    }

    for (let i = 1; i <= 40; i++) {
        if (length <= capacities[i][ecc][mode]) {
            // @ts-ignore
            return i;
        }
    }

    return null;
}

/**
 *
 * @param {string} data
 * @param {boolean} forceUTF8
 * @return {Mode|'utf-8'}
 */
export function detectMode(data, forceUTF8 = false) {
    if (/^\d+$/.test(data)) {
        return 'numeric';
    } else if (/^[\dA-Z\$\%\*\+\-\.\/\: ]+$/.test(data)) {
        return 'alphanumeric';
    } else if (!forceUTF8 && [...data].every(c => utf8_to_iso88591.hasOwnProperty(c))) { // ISO-8859-1
        return 'byte';
    } else if ([...data].every(c => utf8_to_shiftjis.hasOwnProperty(c))) { // Shift-JIS
        return 'kanji';
    } else {
        return 'utf-8';
    }
}

/**
 *
 * @param {string} char
 * @return {number}
 */
function alphanumericMap(char) {
    const map = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15,
        "G": 16,
        "H": 17,
        "I": 18,
        "J": 19,
        "K": 20,
        "L": 21,
        "M": 22,
        "N": 23,
        "O": 24,
        "P": 25,
        "Q": 26,
        "R": 27,
        "S": 28,
        "T": 29,
        "U": 30,
        "V": 31,
        "W": 32,
        "X": 33,
        "Y": 34,
        "Z": 35,
        " ": 36,
        "$": 37,
        "%": 38,
        "*": 39,
        "+": 40,
        "-": 41,
        ".": 42,
        "/": 43,
        ":": 44
    };

    return map[char];
}

/**
 * @typedef {object} ECCBlockInfo
 * @property {number} eccBlock
 * @property {number} blocksGroup1
 * @property {number} dataBlocksGroup1
 * @property {number | null} blocksGroup2
 * @property {number | null} dataBlocksGroup2
 */

/**
 *
 * @param {ECC} ecc
 * @param {Version} version
 * @return {ECCBlockInfo}
 */
function eccBlocks(ecc, version) {
    const blocks = {
        1: {
            L: {
                eccBlock: 7,
                blocksGroup1: 1,
                dataBlocksGroup1: 19,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 10,
                blocksGroup1: 1,
                dataBlocksGroup1: 16,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 13,
                blocksGroup1: 1,
                dataBlocksGroup1: 13,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            H: {
                eccBlock: 17,
                blocksGroup1: 1,
                dataBlocksGroup1: 9,
                blocksGroup2: null,
                dataBlocksGroup2: null
            }
        },
        2: {
            L: {
                eccBlock: 10,
                blocksGroup1: 1,
                dataBlocksGroup1: 34,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 16,
                blocksGroup1: 1,
                dataBlocksGroup1: 28,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 22,
                blocksGroup1: 1,
                dataBlocksGroup1: 22,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 1,
                dataBlocksGroup1: 16,
                blocksGroup2: null,
                dataBlocksGroup2: null
            }
        },
        3: {
            L: {
                eccBlock: 15,
                blocksGroup1: 1,
                dataBlocksGroup1: 55,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 26,
                blocksGroup1: 1,
                dataBlocksGroup1: 44,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 18,
                blocksGroup1: 2,
                dataBlocksGroup1: 17,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            H: {
                eccBlock: 22,
                blocksGroup1: 2,
                dataBlocksGroup1: 13,
                blocksGroup2: null,
                dataBlocksGroup2: null
            }
        },
        4: {
            L: {
                eccBlock: 20,
                blocksGroup1: 1,
                dataBlocksGroup1: 80,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 18,
                blocksGroup1: 2,
                dataBlocksGroup1: 32,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 26,
                blocksGroup1: 2,
                dataBlocksGroup1: 24,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            H: {
                eccBlock: 16,
                blocksGroup1: 4,
                dataBlocksGroup1: 9,
                blocksGroup2: null,
                dataBlocksGroup2: null
            }
        },
        5: {
            L: {
                eccBlock: 26,
                blocksGroup1: 1,
                dataBlocksGroup1: 108,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 24,
                blocksGroup1: 2,
                dataBlocksGroup1: 43,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 18,
                blocksGroup1: 2,
                dataBlocksGroup1: 15,
                blocksGroup2: 2,
                dataBlocksGroup2: 16
            },
            H: {
                eccBlock: 22,
                blocksGroup1: 2,
                dataBlocksGroup1: 11,
                blocksGroup2: 2,
                dataBlocksGroup2: 12
            }
        },
        6: {
            L: {
                eccBlock: 18,
                blocksGroup1: 2,
                dataBlocksGroup1: 68,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 16,
                blocksGroup1: 4,
                dataBlocksGroup1: 27,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 24,
                blocksGroup1: 4,
                dataBlocksGroup1: 19,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 4,
                dataBlocksGroup1: 15,
                blocksGroup2: null,
                dataBlocksGroup2: null
            }
        },
        7: {
            L: {
                eccBlock: 20,
                blocksGroup1: 2,
                dataBlocksGroup1: 78,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 18,
                blocksGroup1: 4,
                dataBlocksGroup1: 31,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 18,
                blocksGroup1: 2,
                dataBlocksGroup1: 14,
                blocksGroup2: 4,
                dataBlocksGroup2: 15
            },
            H: {
                eccBlock: 26,
                blocksGroup1: 4,
                dataBlocksGroup1: 13,
                blocksGroup2: 1,
                dataBlocksGroup2: 14
            }
        },
        8: {
            L: {
                eccBlock: 24,
                blocksGroup1: 2,
                dataBlocksGroup1: 97,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 22,
                blocksGroup1: 2,
                dataBlocksGroup1: 38,
                blocksGroup2: 2,
                dataBlocksGroup2: 39
            },
            Q: {
                eccBlock: 22,
                blocksGroup1: 4,
                dataBlocksGroup1: 18,
                blocksGroup2: 2,
                dataBlocksGroup2: 19
            },
            H: {
                eccBlock: 26,
                blocksGroup1: 4,
                dataBlocksGroup1: 14,
                blocksGroup2: 2,
                dataBlocksGroup2: 15
            }
        },
        9: {
            L: {
                eccBlock: 30,
                blocksGroup1: 2,
                dataBlocksGroup1: 116,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 22,
                blocksGroup1: 3,
                dataBlocksGroup1: 36,
                blocksGroup2: 2,
                dataBlocksGroup2: 37
            },
            Q: {
                eccBlock: 20,
                blocksGroup1: 4,
                dataBlocksGroup1: 16,
                blocksGroup2: 4,
                dataBlocksGroup2: 17
            },
            H: {
                eccBlock: 24,
                blocksGroup1: 4,
                dataBlocksGroup1: 12,
                blocksGroup2: 4,
                dataBlocksGroup2: 13
            }
        },
        10: {
            L: {
                eccBlock: 18,
                blocksGroup1: 2,
                dataBlocksGroup1: 68,
                blocksGroup2: 2,
                dataBlocksGroup2: 69
            },
            M: {
                eccBlock: 26,
                blocksGroup1: 4,
                dataBlocksGroup1: 43,
                blocksGroup2: 1,
                dataBlocksGroup2: 44
            },
            Q: {
                eccBlock: 24,
                blocksGroup1: 6,
                dataBlocksGroup1: 19,
                blocksGroup2: 2,
                dataBlocksGroup2: 20
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 6,
                dataBlocksGroup1: 15,
                blocksGroup2: 2,
                dataBlocksGroup2: 16
            }
        },
        11: {
            L: {
                eccBlock: 20,
                blocksGroup1: 4,
                dataBlocksGroup1: 81,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 30,
                blocksGroup1: 1,
                dataBlocksGroup1: 50,
                blocksGroup2: 4,
                dataBlocksGroup2: 51
            },
            Q: {
                eccBlock: 28,
                blocksGroup1: 4,
                dataBlocksGroup1: 22,
                blocksGroup2: 4,
                dataBlocksGroup2: 23
            },
            H: {
                eccBlock: 24,
                blocksGroup1: 3,
                dataBlocksGroup1: 12,
                blocksGroup2: 8,
                dataBlocksGroup2: 13
            }
        },
        12: {
            L: {
                eccBlock: 24,
                blocksGroup1: 2,
                dataBlocksGroup1: 92,
                blocksGroup2: 2,
                dataBlocksGroup2: 93
            },
            M: {
                eccBlock: 22,
                blocksGroup1: 6,
                dataBlocksGroup1: 36,
                blocksGroup2: 2,
                dataBlocksGroup2: 37
            },
            Q: {
                eccBlock: 26,
                blocksGroup1: 4,
                dataBlocksGroup1: 20,
                blocksGroup2: 6,
                dataBlocksGroup2: 21
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 7,
                dataBlocksGroup1: 14,
                blocksGroup2: 4,
                dataBlocksGroup2: 15
            }
        },
        13: {
            L: {
                eccBlock: 26,
                blocksGroup1: 4,
                dataBlocksGroup1: 107,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 22,
                blocksGroup1: 8,
                dataBlocksGroup1: 37,
                blocksGroup2: 1,
                dataBlocksGroup2: 38
            },
            Q: {
                eccBlock: 24,
                blocksGroup1: 8,
                dataBlocksGroup1: 20,
                blocksGroup2: 4,
                dataBlocksGroup2: 21
            },
            H: {
                eccBlock: 22,
                blocksGroup1: 12,
                dataBlocksGroup1: 11,
                blocksGroup2: 4,
                dataBlocksGroup2: 12
            }
        },
        14: {
            L: {
                eccBlock: 30,
                blocksGroup1: 3,
                dataBlocksGroup1: 115,
                blocksGroup2: 1,
                dataBlocksGroup2: 116
            },
            M: {
                eccBlock: 24,
                blocksGroup1: 4,
                dataBlocksGroup1: 40,
                blocksGroup2: 5,
                dataBlocksGroup2: 41
            },
            Q: {
                eccBlock: 20,
                blocksGroup1: 11,
                dataBlocksGroup1: 16,
                blocksGroup2: 5,
                dataBlocksGroup2: 17
            },
            H: {
                eccBlock: 24,
                blocksGroup1: 11,
                dataBlocksGroup1: 12,
                blocksGroup2: 5,
                dataBlocksGroup2: 13
            }
        },
        15: {
            L: {
                eccBlock: 22,
                blocksGroup1: 5,
                dataBlocksGroup1: 87,
                blocksGroup2: 1,
                dataBlocksGroup2: 88
            },
            M: {
                eccBlock: 24,
                blocksGroup1: 5,
                dataBlocksGroup1: 41,
                blocksGroup2: 5,
                dataBlocksGroup2: 42
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 5,
                dataBlocksGroup1: 24,
                blocksGroup2: 7,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 24,
                blocksGroup1: 11,
                dataBlocksGroup1: 12,
                blocksGroup2: 7,
                dataBlocksGroup2: 13
            }
        },
        16: {
            L: {
                eccBlock: 24,
                blocksGroup1: 5,
                dataBlocksGroup1: 98,
                blocksGroup2: 1,
                dataBlocksGroup2: 99
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 7,
                dataBlocksGroup1: 45,
                blocksGroup2: 3,
                dataBlocksGroup2: 46
            },
            Q: {
                eccBlock: 24,
                blocksGroup1: 15,
                dataBlocksGroup1: 19,
                blocksGroup2: 2,
                dataBlocksGroup2: 20
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 3,
                dataBlocksGroup1: 15,
                blocksGroup2: 13,
                dataBlocksGroup2: 16
            }
        },
        17: {
            L: {
                eccBlock: 28,
                blocksGroup1: 1,
                dataBlocksGroup1: 107,
                blocksGroup2: 5,
                dataBlocksGroup2: 108
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 10,
                dataBlocksGroup1: 46,
                blocksGroup2: 1,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 28,
                blocksGroup1: 1,
                dataBlocksGroup1: 22,
                blocksGroup2: 15,
                dataBlocksGroup2: 23
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 2,
                dataBlocksGroup1: 14,
                blocksGroup2: 17,
                dataBlocksGroup2: 15
            }
        },
        18: {
            L: {
                eccBlock: 30,
                blocksGroup1: 5,
                dataBlocksGroup1: 120,
                blocksGroup2: 1,
                dataBlocksGroup2: 121
            },
            M: {
                eccBlock: 26,
                blocksGroup1: 9,
                dataBlocksGroup1: 43,
                blocksGroup2: 4,
                dataBlocksGroup2: 44
            },
            Q: {
                eccBlock: 28,
                blocksGroup1: 17,
                dataBlocksGroup1: 22,
                blocksGroup2: 1,
                dataBlocksGroup2: 23
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 2,
                dataBlocksGroup1: 14,
                blocksGroup2: 19,
                dataBlocksGroup2: 15
            }
        },
        19: {
            L: {
                eccBlock: 28,
                blocksGroup1: 3,
                dataBlocksGroup1: 113,
                blocksGroup2: 4,
                dataBlocksGroup2: 114
            },
            M: {
                eccBlock: 26,
                blocksGroup1: 3,
                dataBlocksGroup1: 44,
                blocksGroup2: 11,
                dataBlocksGroup2: 45
            },
            Q: {
                eccBlock: 26,
                blocksGroup1: 17,
                dataBlocksGroup1: 21,
                blocksGroup2: 4,
                dataBlocksGroup2: 22
            },
            H: {
                eccBlock: 26,
                blocksGroup1: 9,
                dataBlocksGroup1: 13,
                blocksGroup2: 16,
                dataBlocksGroup2: 14
            }
        },
        20: {
            L: {
                eccBlock: 28,
                blocksGroup1: 3,
                dataBlocksGroup1: 107,
                blocksGroup2: 5,
                dataBlocksGroup2: 108
            },
            M: {
                eccBlock: 26,
                blocksGroup1: 3,
                dataBlocksGroup1: 41,
                blocksGroup2: 13,
                dataBlocksGroup2: 42
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 15,
                dataBlocksGroup1: 24,
                blocksGroup2: 5,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 28,
                blocksGroup1: 15,
                dataBlocksGroup1: 15,
                blocksGroup2: 10,
                dataBlocksGroup2: 16
            }
        },
        21: {
            L: {
                eccBlock: 28,
                blocksGroup1: 4,
                dataBlocksGroup1: 116,
                blocksGroup2: 4,
                dataBlocksGroup2: 117
            },
            M: {
                eccBlock: 26,
                blocksGroup1: 17,
                dataBlocksGroup1: 42,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 28,
                blocksGroup1: 17,
                dataBlocksGroup1: 22,
                blocksGroup2: 6,
                dataBlocksGroup2: 23
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 19,
                dataBlocksGroup1: 16,
                blocksGroup2: 6,
                dataBlocksGroup2: 17
            }
        },
        22: {
            L: {
                eccBlock: 28,
                blocksGroup1: 2,
                dataBlocksGroup1: 111,
                blocksGroup2: 7,
                dataBlocksGroup2: 112
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 17,
                dataBlocksGroup1: 46,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 7,
                dataBlocksGroup1: 24,
                blocksGroup2: 16,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 24,
                blocksGroup1: 34,
                dataBlocksGroup1: 13,
                blocksGroup2: null,
                dataBlocksGroup2: null
            }
        },
        23: {
            L: {
                eccBlock: 30,
                blocksGroup1: 4,
                dataBlocksGroup1: 121,
                blocksGroup2: 5,
                dataBlocksGroup2: 122
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 4,
                dataBlocksGroup1: 47,
                blocksGroup2: 14,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 11,
                dataBlocksGroup1: 24,
                blocksGroup2: 14,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 16,
                dataBlocksGroup1: 15,
                blocksGroup2: 14,
                dataBlocksGroup2: 16
            }
        },
        24: {
            L: {
                eccBlock: 30,
                blocksGroup1: 6,
                dataBlocksGroup1: 117,
                blocksGroup2: 4,
                dataBlocksGroup2: 118
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 6,
                dataBlocksGroup1: 45,
                blocksGroup2: 14,
                dataBlocksGroup2: 46
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 11,
                dataBlocksGroup1: 24,
                blocksGroup2: 16,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 30,
                dataBlocksGroup1: 16,
                blocksGroup2: 2,
                dataBlocksGroup2: 17
            }
        },
        25: {
            L: {
                eccBlock: 26,
                blocksGroup1: 8,
                dataBlocksGroup1: 106,
                blocksGroup2: 4,
                dataBlocksGroup2: 107
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 8,
                dataBlocksGroup1: 47,
                blocksGroup2: 13,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 7,
                dataBlocksGroup1: 24,
                blocksGroup2: 22,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 22,
                dataBlocksGroup1: 15,
                blocksGroup2: 13,
                dataBlocksGroup2: 16
            }
        },
        26: {
            L: {
                eccBlock: 28,
                blocksGroup1: 10,
                dataBlocksGroup1: 114,
                blocksGroup2: 2,
                dataBlocksGroup2: 115
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 19,
                dataBlocksGroup1: 46,
                blocksGroup2: 4,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 28,
                blocksGroup1: 28,
                dataBlocksGroup1: 22,
                blocksGroup2: 6,
                dataBlocksGroup2: 23
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 33,
                dataBlocksGroup1: 16,
                blocksGroup2: 4,
                dataBlocksGroup2: 17
            }
        },
        27: {
            L: {
                eccBlock: 30,
                blocksGroup1: 8,
                dataBlocksGroup1: 122,
                blocksGroup2: 4,
                dataBlocksGroup2: 123
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 22,
                dataBlocksGroup1: 45,
                blocksGroup2: 3,
                dataBlocksGroup2: 46
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 8,
                dataBlocksGroup1: 23,
                blocksGroup2: 26,
                dataBlocksGroup2: 24
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 12,
                dataBlocksGroup1: 15,
                blocksGroup2: 28,
                dataBlocksGroup2: 16
            }
        },
        28: {
            L: {
                eccBlock: 30,
                blocksGroup1: 3,
                dataBlocksGroup1: 117,
                blocksGroup2: 10,
                dataBlocksGroup2: 118
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 3,
                dataBlocksGroup1: 45,
                blocksGroup2: 23,
                dataBlocksGroup2: 46
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 4,
                dataBlocksGroup1: 24,
                blocksGroup2: 31,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 11,
                dataBlocksGroup1: 15,
                blocksGroup2: 31,
                dataBlocksGroup2: 16
            }
        },
        29: {
            L: {
                eccBlock: 30,
                blocksGroup1: 7,
                dataBlocksGroup1: 116,
                blocksGroup2: 7,
                dataBlocksGroup2: 117
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 21,
                dataBlocksGroup1: 45,
                blocksGroup2: 7,
                dataBlocksGroup2: 46
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 1,
                dataBlocksGroup1: 23,
                blocksGroup2: 37,
                dataBlocksGroup2: 24
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 19,
                dataBlocksGroup1: 15,
                blocksGroup2: 26,
                dataBlocksGroup2: 16
            }
        },
        30: {
            L: {
                eccBlock: 30,
                blocksGroup1: 5,
                dataBlocksGroup1: 115,
                blocksGroup2: 10,
                dataBlocksGroup2: 116
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 19,
                dataBlocksGroup1: 47,
                blocksGroup2: 10,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 15,
                dataBlocksGroup1: 24,
                blocksGroup2: 25,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 23,
                dataBlocksGroup1: 15,
                blocksGroup2: 25,
                dataBlocksGroup2: 16
            }
        },
        31: {
            L: {
                eccBlock: 30,
                blocksGroup1: 13,
                dataBlocksGroup1: 115,
                blocksGroup2: 3,
                dataBlocksGroup2: 116
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 2,
                dataBlocksGroup1: 46,
                blocksGroup2: 29,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 42,
                dataBlocksGroup1: 24,
                blocksGroup2: 1,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 23,
                dataBlocksGroup1: 15,
                blocksGroup2: 28,
                dataBlocksGroup2: 16
            }
        },
        32: {
            L: {
                eccBlock: 30,
                blocksGroup1: 17,
                dataBlocksGroup1: 115,
                blocksGroup2: null,
                dataBlocksGroup2: null
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 10,
                dataBlocksGroup1: 46,
                blocksGroup2: 23,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 10,
                dataBlocksGroup1: 24,
                blocksGroup2: 35,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 19,
                dataBlocksGroup1: 15,
                blocksGroup2: 35,
                dataBlocksGroup2: 16
            }
        },
        33: {
            L: {
                eccBlock: 30,
                blocksGroup1: 17,
                dataBlocksGroup1: 115,
                blocksGroup2: 1,
                dataBlocksGroup2: 116
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 14,
                dataBlocksGroup1: 46,
                blocksGroup2: 21,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 29,
                dataBlocksGroup1: 24,
                blocksGroup2: 19,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 11,
                dataBlocksGroup1: 15,
                blocksGroup2: 46,
                dataBlocksGroup2: 16
            }
        },
        34: {
            L: {
                eccBlock: 30,
                blocksGroup1: 13,
                dataBlocksGroup1: 115,
                blocksGroup2: 6,
                dataBlocksGroup2: 116
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 14,
                dataBlocksGroup1: 46,
                blocksGroup2: 23,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 44,
                dataBlocksGroup1: 24,
                blocksGroup2: 7,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 59,
                dataBlocksGroup1: 16,
                blocksGroup2: 1,
                dataBlocksGroup2: 17
            }
        },
        35: {
            L: {
                eccBlock: 30,
                blocksGroup1: 12,
                dataBlocksGroup1: 121,
                blocksGroup2: 7,
                dataBlocksGroup2: 122
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 12,
                dataBlocksGroup1: 47,
                blocksGroup2: 26,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 39,
                dataBlocksGroup1: 24,
                blocksGroup2: 14,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 22,
                dataBlocksGroup1: 15,
                blocksGroup2: 41,
                dataBlocksGroup2: 16
            }
        },
        36: {
            L: {
                eccBlock: 30,
                blocksGroup1: 6,
                dataBlocksGroup1: 121,
                blocksGroup2: 14,
                dataBlocksGroup2: 122
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 6,
                dataBlocksGroup1: 47,
                blocksGroup2: 34,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 46,
                dataBlocksGroup1: 24,
                blocksGroup2: 10,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 2,
                dataBlocksGroup1: 15,
                blocksGroup2: 64,
                dataBlocksGroup2: 16
            }
        },
        37: {
            L: {
                eccBlock: 30,
                blocksGroup1: 17,
                dataBlocksGroup1: 122,
                blocksGroup2: 4,
                dataBlocksGroup2: 123
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 29,
                dataBlocksGroup1: 46,
                blocksGroup2: 14,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 49,
                dataBlocksGroup1: 24,
                blocksGroup2: 10,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 24,
                dataBlocksGroup1: 15,
                blocksGroup2: 46,
                dataBlocksGroup2: 16
            }
        },
        38: {
            L: {
                eccBlock: 30,
                blocksGroup1: 4,
                dataBlocksGroup1: 122,
                blocksGroup2: 18,
                dataBlocksGroup2: 123
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 13,
                dataBlocksGroup1: 46,
                blocksGroup2: 32,
                dataBlocksGroup2: 47
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 48,
                dataBlocksGroup1: 24,
                blocksGroup2: 14,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 42,
                dataBlocksGroup1: 15,
                blocksGroup2: 32,
                dataBlocksGroup2: 16
            }
        },
        39: {
            L: {
                eccBlock: 30,
                blocksGroup1: 20,
                dataBlocksGroup1: 117,
                blocksGroup2: 4,
                dataBlocksGroup2: 118
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 40,
                dataBlocksGroup1: 47,
                blocksGroup2: 7,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 43,
                dataBlocksGroup1: 24,
                blocksGroup2: 22,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 10,
                dataBlocksGroup1: 15,
                blocksGroup2: 67,
                dataBlocksGroup2: 16
            }
        },
        40: {
            L: {
                eccBlock: 30,
                blocksGroup1: 19,
                dataBlocksGroup1: 118,
                blocksGroup2: 6,
                dataBlocksGroup2: 119
            },
            M: {
                eccBlock: 28,
                blocksGroup1: 18,
                dataBlocksGroup1: 47,
                blocksGroup2: 31,
                dataBlocksGroup2: 48
            },
            Q: {
                eccBlock: 30,
                blocksGroup1: 34,
                dataBlocksGroup1: 24,
                blocksGroup2: 34,
                dataBlocksGroup2: 25
            },
            H: {
                eccBlock: 30,
                blocksGroup1: 20,
                dataBlocksGroup1: 15,
                blocksGroup2: 61,
                dataBlocksGroup2: 16
            }
        }
    };

    return blocks[version][ecc];
}

/**
 *
 * @param {number} [primitive=0x11D]
 * @param {number} [fieldSize=256]
 * @return {[number[], number[]]}
 */
function generateGFLogTable(primitive = 0x11D, fieldSize = 256) {
    /** @type {number[]} */
    const logTable = new Array(fieldSize);
    /** @type {number[]} */
    const antilogTable = new Array(fieldSize);

    antilogTable[0] = 1

    for (let i = 1; i < fieldSize - 1; i++) {
        antilogTable[i] = antilogTable[i - 1] * 2;
        if (antilogTable[i] >= fieldSize) {
            antilogTable[i] ^= primitive; // Apply reduction by primitive polynomial
        }

        logTable[antilogTable[i]] = i;
    }

    antilogTable[fieldSize - 1] = 1;
    logTable[1] = 0;

    return [logTable, antilogTable];
}

const [gf_log_table, gf_antilog_table] = generateGFLogTable(0x11D, 256);

/**
 * Computes the logarithm of a number in the Galois Field 256.
 *
 * @param {number} x
 * @return {number}
 */
function gf_log(x) {
    return gf_log_table[x];
}

/**
 * Computes the antilogarithm of a number in the Galois Field 256.
 *
 * @param {number} x
 * @return {number}
 */
function gf_antilog(x) {
    return gf_antilog_table[x];
}

/**
 *
 * @param {number} n
 * @return {number[]}
 */
function generateGeneratorPolynomial(n) {
    if (n === 0) {
        return [n];
    }

    const a = generateGeneratorPolynomial(n - 1);
    const b = [0, n - 1];

    const c = Array(n + 1).fill(0);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            const x = i + j;
            c[x] ^= gf_antilog((a[i] + b[j]) % 255);
        }
    }

    for (let i = 0; i < c.length; i++) {
        c[i] = gf_log(c[i]);
    }

    return c;
}

/**
 *
 * @param {number[]} message
 * @param {number[]} generator
 * @return {number[]}
 */
function gf_dividePolynomial(message, generator) {
    const a = message.length;
    const b = generator.length;

    message = message.concat(Array(b - 1).fill(0));
    generator = generator.concat(Array(a - 1).fill(0));

    for (let i = 0; i < a; i++) {
        const mult = [...generator];
        const exp = gf_log(message[0]);
        for (let j = 0; j < b; j++) {
            mult[j] = (exp + generator[j]) % 255;
        }

        for (let j = 0; j < b; j++) {
            mult[j] = gf_antilog(mult[j]);
        }

        for (let j = 0; j < message.length; j++) {
            message[j] ^= mult[j];
        }

        message.shift();
    }

    return message;
}

/**
 *
 * @param {number[]} message
 * @param {number[]} generator
 * @param {number} [stop=-1]
 * @return {number[]}
 */
function dividePolynomial(message, generator, stop = -1) {
    const a = message.length;

    for (let i = 0; i < a; i++) {
        if (stop !== -1 && message.length <= stop) {
            break;
        }

        const mult = generator.concat(Array(Math.max(0, message.length - generator.length)).fill(0));

        for (let j = 0; j < message.length; j++) {
            message[j] ^= mult[j];
        }

        while (message[0] === 0) {
            message.shift();
        }
    }

    if (stop !== -1 && message.length < stop) {
        message = Array(stop - message.length).fill(0).concat(message);
    }

    return message;
}

/**
 *
 * @param {number[]} message
 * @return {number[]}
 */
// @ts-ignore
function unshiftLeftZeros(message) {
    while (message[0] === 0) {
        message.shift();
    }

    return message;
}

/**
 *
 * @param {ECC} ecc
 * @param {Version} version
 * @return {number}
 */
function totalDataCodeworks(ecc, version) {
    const eccMap = eccBlocks(ecc, version);
    return eccMap.blocksGroup1 * eccMap.dataBlocksGroup1 + (eccMap.blocksGroup2 !== null && eccMap.dataBlocksGroup2 !== null ? eccMap.blocksGroup2 * eccMap.dataBlocksGroup2 : 0);
}

/**
 *
 * @param {string} data
 * @param {Mode|'utf-8'} mode
 * @return {string[]}
 */
export function preEncodeData(data, mode) {
    switch (mode) {
        case 'numeric': {
            const numbers = data.match(/\d{1,3}/g);
            return numbers?.map(n => parseInt(n))
                .map(n =>
                    n.toString(2)
                        .padStart(n <= 9 ? 4 : n <= 99 ? 7 : 10, '0')
                ) || [];
        }

        case 'alphanumeric': {
            const chars = data.match(/.{1,2}/g);
            return chars?.map(c =>
                c.length === 1 ? (
                    alphanumericMap(c[0])
                        .toString(2)
                        .padStart(6, '0')
                ) : (
                    (45 * alphanumericMap(c[0]) + alphanumericMap(c[1]))
                        .toString(2)
                        .padStart(11, '0')
                )
            ) || [];
        }

        case 'byte': {
            const bytes = data.split('');
            return bytes.map(c => utf8_to_iso88591[c].toString(2).padStart(8, '0'));
        }

        case 'kanji': {
            return data.split('')
                .map(c => utf8_to_shiftjis[c])
                .map(c =>
                    // @ts-ignore
                    (c - (c <= 0x9FFC ? 0x8140 : 0xC140))
                        .toString(16)
                        .padStart(4, '0')
                        .match(/.{2}/g)
                        .map(v => parseInt(v, 16))
                        .map((v, i) => i === 0 ? v * 0xC0 : v)
                        .reduce((acc, v) => acc + v, 0)
                        .toString(2)
                        .padStart(13, '0')
                ) || [];
        }

        case 'utf-8': {
            const textEncoder = new TextEncoder();
            return [...textEncoder.encode(data.normalize('NFD'))]
                .map(c =>
                    c.toString(2)
                        .padStart(8, '0')
                );
        }
    }
}

/**
 * For some QR versions, the final binary message is not long enough to fill the required number of bits. In this case, it is necessary to add a certain number of 0s to the end of the final message to make it have the correct length.
 *
 * @param {Version} version
 * @return {number}
 */
function calculateRemainderBits(version) {
    const map = {
        1: 0,
        2: 7,
        3: 7,
        4: 7,
        5: 7,
        6: 7,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 3,
        15: 3,
        16: 3,
        17: 3,
        18: 3,
        19: 3,
        20: 3,
        21: 4,
        22: 4,
        23: 4,
        24: 4,
        25: 4,
        26: 4,
        27: 4,
        28: 3,
        29: 3,
        30: 3,
        31: 3,
        32: 3,
        33: 3,
        34: 3,
        35: 0,
        36: 0,
        37: 0,
        38: 0,
        39: 0,
        40: 0
    };

    return map[version];
}

/**
 * The alignment patterns are placed in a fixed position in the symbol, and are used to compensate for distortion that occurs in the symbol.
 *
 * @param {Version} version
 * @return {number[]}
 */
function alignPatterns(version) {
    const map = {
        1: [],
        2: [
            6,
            18
        ],
        3: [
            6,
            22
        ],
        4: [
            6,
            26
        ],
        5: [
            6,
            30
        ],
        6: [
            6,
            34
        ],
        7: [
            6,
            22,
            38
        ],
        8: [
            6,
            24,
            42
        ],
        9: [
            6,
            26,
            46
        ],
        10: [
            6,
            28,
            50
        ],
        11: [
            6,
            30,
            54
        ],
        12: [
            6,
            32,
            58
        ],
        13: [
            6,
            34,
            62
        ],
        14: [
            6,
            26,
            46,
            66
        ],
        15: [
            6,
            26,
            48,
            70
        ],
        16: [
            6,
            26,
            50,
            74
        ],
        17: [
            6,
            30,
            54,
            78
        ],
        18: [
            6,
            30,
            56,
            82
        ],
        19: [
            6,
            30,
            58,
            86
        ],
        20: [
            6,
            34,
            62,
            90
        ],
        21: [
            6,
            28,
            50,
            72,
            94
        ],
        22: [
            6,
            26,
            50,
            74,
            98
        ],
        23: [
            6,
            30,
            54,
            78,
            102
        ],
        24: [
            6,
            28,
            54,
            80,
            106
        ],
        25: [
            6,
            32,
            58,
            84,
            110
        ],
        26: [
            6,
            30,
            58,
            86,
            114
        ],
        27: [
            6,
            34,
            62,
            90,
            118
        ],
        28: [
            6,
            26,
            50,
            74,
            98,
            122
        ],
        29: [
            6,
            30,
            54,
            78,
            102,
            126
        ],
        30: [
            6,
            26,
            52,
            78,
            104,
            130
        ],
        31: [
            6,
            30,
            56,
            82,
            108,
            134
        ],
        32: [
            6,
            34,
            60,
            86,
            112,
            138
        ],
        33: [
            6,
            30,
            58,
            86,
            114,
            142
        ],
        34: [
            6,
            34,
            62,
            90,
            118,
            146
        ],
        35: [
            6,
            30,
            54,
            78,
            102,
            126,
            150
        ],
        36: [
            6,
            24,
            50,
            76,
            102,
            128,
            154
        ],
        37: [
            6,
            28,
            54,
            80,
            106,
            132,
            158
        ],
        38: [
            6,
            32,
            58,
            84,
            110,
            136,
            162
        ],
        39: [
            6,
            26,
            54,
            82,
            110,
            138,
            166
        ],
        40: [
            6,
            30,
            58,
            86,
            114,
            142,
            170
        ]
    };

    return map[version];
}

/**
 *
 * @param {'L'|'M'|'Q'|'H'} ecc
 * @param {number} mask
 * @return {string}
 */
function generateFormatString(ecc, mask) {
    const eccBits = ecc === 'L' ? '01' : ecc === 'M' ? '00' : ecc === 'Q' ? '11' : ecc === 'H' ? '10' : '';
    const maskBits = mask.toString(2).padStart(3, '0');

    const generator = [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1];
    const message = [...parseInt((eccBits + maskBits).padEnd(15, '0'), 2).toString(2)].map(x => parseInt(x, 2));

    const div = dividePolynomial(message, generator, 10);
    const data = (eccBits + maskBits + div.join('')).split('').map(x => parseInt(x, 2));

    const xorMask = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];

    for (let i = 0; i < xorMask.length; i++) {
        data[i] ^= xorMask[i];
    }

    return data.join('');
}

/**
 *
 * @param {number} version
 * @return {string}
 */
function generateVersionString(version) {
    const versionBits = version.toString(2).padStart(6, '0');

    const message = unshiftLeftZeros([...versionBits.padEnd(18, '0')].map(x => parseInt(x, 2)));
    const generator = '1111100100101'.padEnd(message.length, '0').split('').map(x => parseInt(x, 2));

    const div = dividePolynomial(message, generator, 12);

    return versionBits + div.join('');
}

/**
 *
 * @param {Version} version
 * @param {Mode|'utf-8'} mode
 * @return {number|null}
 */
function generateEncodingSize(version, mode) {
    if (version >= 1 && version <= 9) {
        if (mode === 'numeric') {
            return 10;
        } else if (mode === 'alphanumeric') {
            return 9;
        } else if (mode === 'byte' || mode === 'utf-8') {
            return 8;
        } else if (mode === 'kanji') {
            return 8;
        }
    } else if (version >= 10 && version <= 26) {
        if (mode === 'numeric') {
            return 12;
        } else if (mode === 'alphanumeric') {
            return 11;
        } else if (mode === 'byte' || mode === 'utf-8') {
            return 16;
        } else if (mode === 'kanji') {
            return 10;
        }
    } else if (version >= 27 && version <= 40) {
        if (mode === 'numeric') {
            return 14;
        } else if (mode === 'alphanumeric') {
            return 13;
        } else if (mode === 'byte' || mode === 'utf-8') {
            return 16;
        } else if (mode === 'kanji') {
            return 12;
        }
    }

    return null;
}

/**
 *
 * @param {Mode|'utf-8'} mode
 * @return {string|null}
 */
function generateModeIndicator(mode) {
    if (mode === 'numeric') {
        return '0001';
    } else if (mode === 'alphanumeric') {
        return '0010';
    } else if (mode === 'byte' || mode === 'utf-8') {
        return '0100';
    } else if (mode === 'kanji') {
        return '1000';
    } else if (mode === 'eci') {
        return '0111';
    }

    return null;
}

/**
 *
 * @param {string} data
 * @param {ECC} ecc
 * @param {boolean} [stepByStep=false]
 * @param {object} params
 * @param {boolean} [params.forceUTF8=false]
 * @param {Version|null} [params.version=null]
 * @param {(data: string) => void} [params.onEncode]
 * @return {Promise<QR>}
 */
// @ts-ignore
export async function qrCode(data, ecc, stepByStep = false, { forceUTF8 = false, version = null, onEncode = (data) => { } } = {}) {
    if (!['L', 'M', 'Q', 'H'].includes(ecc)) {
        throw new TypeError('Invalid Error Correction Level');
    }

    const mode = detectMode(data, forceUTF8);

    let preEncodedData = preEncodeData(data, mode).join('');
    if (stepByStep) {
        onEncode(preEncodedData);
        await sleep(500);
    }

    const dataSize = mode === 'utf-8' ? preEncodedData.length / 8 : data.length;

    if (version === null) {
        version = minVersion(dataSize, mode, ecc);
    } else if (version > 40 || capacities[version][ecc][mode === 'utf-8' ? 'byte' : mode] < dataSize) {
        throw new RangeError('Invalid version');
    }

    if (version === null) {
        throw new RangeError('Invalid Version');
    }

    const encodingSize = generateEncodingSize(version, mode);
    const modeIndicator = generateModeIndicator(mode);

    if (encodingSize === null || modeIndicator == null) {
        throw new TypeError('Invalid Encoding Mode');
    }

    const size = dataSize.toString(2).padStart(encodingSize, '0');

    preEncodedData = modeIndicator + size + preEncodedData;
    const requiredSize = 8 * totalDataCodeworks(ecc, version);

    if (stepByStep) {
        onEncode(preEncodedData);
        await sleep(500);
    }

    if (preEncodedData.length < requiredSize) {
        preEncodedData += '0'.repeat(Math.min(4, requiredSize - preEncodedData.length));
    }

    if (preEncodedData.length % 8) {
        preEncodedData += '0'.repeat(8 - preEncodedData.length % 8);
    }

    if (preEncodedData.length < requiredSize) {
        while (preEncodedData.length + 16 <= requiredSize) {
            preEncodedData += '1110110000010001';
        }

        if (preEncodedData.length < requiredSize) {
            preEncodedData += '11101100';
        }
    }

    const preEncodedDataBytes = preEncodedData.match(/.{8}/g)?.map(x => parseInt(x, 2)) ?? [];

    if (stepByStep) {
        onEncode(preEncodedData);
        await sleep(500);
    }

    const eccMaps = eccBlocks(ecc, version);

    /** @type {number[][][]} */
    const dataGroups = [[], []]; // [group][block][codeword]
    /** @type {number[][][]} */
    const eccGroups = [[], []];
    for (let i = 0; i < eccMaps.blocksGroup1; i++) {
        dataGroups[0][i] = [];
        for (let j = 0; j < eccMaps.dataBlocksGroup1; j++) {
            dataGroups[0][i].push(preEncodedDataBytes[i * eccMaps.dataBlocksGroup1 + j]);
        }

        const messagePolynomial = dataGroups[0][i];
        const generatorPolynomial = generateGeneratorPolynomial(eccMaps.eccBlock);

        const eccData = gf_dividePolynomial(messagePolynomial, generatorPolynomial);
        eccGroups[0][i] = eccData;
    }

    if (eccMaps.blocksGroup2 !== null && eccMaps.dataBlocksGroup2 !== null) {
        for (let i = 0; i < eccMaps.blocksGroup2; i++) {
            dataGroups[1][i] = [];
            for (let j = 0; j < eccMaps.dataBlocksGroup2; j++) {
                dataGroups[1][i].push(preEncodedDataBytes[eccMaps.blocksGroup1 * eccMaps.dataBlocksGroup1 + i * eccMaps.dataBlocksGroup2 + j]);
            }

            const messagePolynomial = dataGroups[1][i];
            const generatorPolynomial = generateGeneratorPolynomial(eccMaps.eccBlock);

            const eccData = gf_dividePolynomial(messagePolynomial, generatorPolynomial);
            eccGroups[1][i] = eccData;
        }
    }

    const interleavedData = [];
    for (let k = 0; k < Math.max(eccMaps.dataBlocksGroup1, eccMaps.dataBlocksGroup2 ?? 0); k++) { // Data Codewords
        for (let i = 0; i < dataGroups.length; i++) { // Groups
            for (let j = 0; j < dataGroups[i].length; j++) { // Blocks
                if (k < dataGroups[i][j].length) {
                    interleavedData.push(dataGroups[i][j][k]);
                }
            }
        }
    }

    for (let k = 0; k < eccMaps.eccBlock; k++) { // Data Codewords
        for (let i = 0; i < eccGroups.length; i++) { // Groups
            for (let j = 0; j < eccGroups[i].length; j++) { // Blocks
                interleavedData.push(eccGroups[i][j][k]);
            }
        }
    }

    const remainderBits = calculateRemainderBits(version);
    const encodedData = interleavedData.map(c => c.toString(2).padStart(8, '0')).join('').concat('0'.repeat(remainderBits));

    if (stepByStep) {
        onEncode(encodedData);
        await sleep(500);
    }

    return {
        data: encodedData,
        version,
        ecc,
        mode: mode === 'utf-8' ? 'byte' : mode
    };
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {boolean} [set=true]
 */
function fill(
    buffer,
    x,
    y,
    w,
    h,
    set = true
) {
    for (let i = x; i < x + w; i++) {
        for (let j = y; j < y + h; j++) {
            buffer[i][j] = set;
        }
    }
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 */
function clear(
    buffer,
    fillable,
    dataBits,
    size,
    x,
    y,
    w,
    h
) {
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            if (x + i < 0 || y + j < 0 || x + i >= size || y + j >= size) {
                continue;
            }

            fillable[x + i][y + j] = false;
            dataBits[x + i][y + j] = false;
            buffer[x + i][y + j] = false;
        }
    }
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {number} x
 * @param {number} y
 */
function drawFinderPattern(
    buffer,
    fillable,
    dataBits,
    size,
    x,
    y
) {
    clear(buffer, fillable, dataBits, size, x - 1, y - 1, 9, 9);

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if ((i == 0 || i == 6 || j == 0 || j == 6)) {
                fill(buffer, x + i, y + j, 1, 1);
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            fill(buffer, x + 2 + i, y + 2 + j, 1, 1);
        }
    }
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {number} x
 * @param {number} y
 */
function drawAlignPattern(
    buffer,
    fillable,
    dataBits,
    size,
    x,
    y
) {
    clear(buffer, fillable, dataBits, size, x - 2, y - 2, 5, 5);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i == 0 || i == 4 || j == 0 || j == 4) {
                fill(buffer, x - 2 + i, y - 2 + j, 1, 1);
            }
        }
    }

    fill(buffer, x, y, 1, 1);
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {boolean[][]} dataBits
 * @param {number} size
 */
function drawTimingPatterns(
    buffer,
    fillable,
    dataBits,
    size
) {
    clear(buffer, fillable, dataBits, size, 6, 8, 1, size - 16);
    clear(buffer, fillable, dataBits, size, 8, 6, size - 16, 1);

    let paint = true;
    for (let i = 8; i < size - 8; i++) {
        if (paint) {
            fill(buffer, 6, i, 1, 1);
            fill(buffer, i, 6, 1, 1);
        }

        paint = !paint;
    }
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {Version} version
 */
function drawDarkModule(
    buffer,
    fillable,
    dataBits,
    size,
    version
) {
    clear(buffer, fillable, dataBits, size, 8, 4 * version + 9, 1, 1);
    buffer[8][4 * version + 9] = true;
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {number} size
 * @param {Version} version
 */
function drawVersion(
    buffer,
    size,
    version
) {
    if (version < 7) {
        return;
    }

    const versionString = generateVersionString(version).split('').reverse().join('');

    // Top Right
    let k = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (versionString[k++] === '1') {
                fill(buffer, 0 + i, size - 11 + j, 1, 1);
            }
        }
    }

    // Bottom Left
    k = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (versionString[k++] === '1') {
                fill(buffer, size - 11 + j, 0 + i, 1, 1);
            }
        }
    }
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 */
function markReservedArea(
    buffer,
    fillable,
    dataBits,
    size,
    x,
    y,
    w,
    h
) {
    clear(buffer, fillable, dataBits, size, x, y, w, h);
}

/**
 *
 * @param {number} mask
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function canApplyMask(
    mask,
    row,
    column
) {
    switch (mask) {
        case 0:
            return (row + column) % 2 === 0;
        case 1:
            return row % 2 === 0;
        case 2:
            return column % 3 === 0;
        case 3:
            return (row + column) % 3 === 0;
        case 4:
            return (Math.floor(row / 2) + Math.floor(column / 3)) % 2 === 0;
        case 5:
            return (row * column) % 2 + (row * column) % 3 === 0;
        case 6:
            return ((row * column) % 2 + (row * column) % 3) % 2 === 0;
        case 7:
            return ((row * column) % 3 + (row + column) % 2) % 2 === 0;
    }

    return false;
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} dataBits
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function switchColor(
    buffer,
    dataBits,
    x,
    y
) {
    if (!dataBits[x][y]) {
        return false;
    }

    buffer[x][y] = !buffer[x][y];

    return true;
}

/**
 * For the first evaluation condition, check each row one-by-one.
 * If there are five consecutive modules of the same color, add 3 to the penalty.
 * If there are more modules of the same color after the first five, add 1 for each additional module of the same color.
 * Afterward, check each column one-by-one, checking for the same condition.
 * Add the horizontal and vertical total to obtain penalty score #1.
 *
 * @param {boolean[][]} buffer
 * @param {number} size
 * @return {number}
 */
function evaluatePenalty1(buffer, size) {
    let penalty = 0;
    for (let i = 0; i < size; i++) {
        let j = 0;
        while (j < size) {
            let count = 1;
            while (j < size - 1 && buffer[j][i] === buffer[j + 1][i]) {
                j++;
                count++;
            }

            if (count >= 5) {
                penalty += 3 + (count - 5);
            }

            j++;
        }
    }

    for (let i = 0; i < size; i++) {
        let j = 0;
        while (j < size) {
            let count = 1;
            while (j < size - 1 && buffer[i][j] === buffer[i][j + 1]) {
                j++;
                count++;
            }

            if (count >= 5) {
                penalty += 3 + (count - 5);
            }

            j++;
        }
    }

    return penalty;
}

/**
 * For second evaluation condition, look for areas of the same color that are at least 2x2 modules or larger.
 * The QR code specification says that for a solid-color block of size m × n, the penalty score is 3 × (m - 1) × (n - 1).
 * However, the QR code specification does not specify how to calculate the penalty when there are multiple ways of dividing up the solid-color blocks.
 * Therefore, rather than looking for solid-color blocks larger than 2x2, simply add 3 to the penalty score for every 2x2 block of the same color in the QR code, making sure to count overlapping 2x2 blocks.
 * For example, a 3x2 block of the same color should be counted as two 2x2 blocks, one overlapping the other.
 *
 * @param {boolean[][]} buffer
 * @param {number} size
 * @return {number}
 */
function evaluatePenalty2(buffer, size) {
    let penalty = 0;
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1; j++) {
            if (
                buffer[i][j] === buffer[i + 1][j]
                && buffer[i][j] === buffer[i][j + 1]
                && buffer[i][j] === buffer[i + 1][j + 1]
            ) {
                penalty += 3;
            }
        }
    }

    return penalty;
}

/**
 * The third penalty rule looks for patterns of dark-light-dark-dark-dark-light-dark that have four light modules on either side.
 * Each time this pattern is found, add 40 to the penalty score.
 *
 * @param {boolean[][]} buffer
 * @param {number} size
 * @return {number}
 */
function evaluatePenalty3(buffer, size) {
    const pattern = [true, false, true, true, true, false, true, false, false, false, false];
    const reversedPattern = pattern.slice().reverse();

    let penalty = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - pattern.length + 1; j++) {
            const bufferPattern = [];
            for (let k = 0; k < pattern.length; k++) {
                bufferPattern.push(buffer[i][j + k]);
            }

            if (bufferPattern.every((value, index) => value === pattern[index])) {
                penalty += 40;
            } else if (bufferPattern.every((value, index) => value === reversedPattern[index])) {
                penalty += 40;
            }
        }
    }

    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size - pattern.length + 1; i++) {
            const bufferPattern = [];
            for (let k = 0; k < pattern.length; k++) {
                bufferPattern.push(buffer[i + k][j]);
            }

            if (bufferPattern.every((value, index) => value === pattern[index])) {
                penalty += 40;
            } else if (bufferPattern.every((value, index) => value === reversedPattern[index])) {
                penalty += 40;
            }
        }
    }

    return penalty;
}

/**
 * The final evaluation condition is based on the ratio of light modules to dark modules. To calculate this penalty rule, do the following steps:

 * Count the total number of modules in the matrix.
 * Count how many dark modules there are in the matrix.
 * Calculate the percent of modules in the matrix that are dark: (darkmodules / totalmodules) * 100
 * Determine the previous and next multiple of five of this percent. For example, for 43 percent, the previous multiple of five is 40, and the next multiple of five is 45.
 * Subtract 50 from each of these multiples of five and take the absolute value of the result. For example, |40 - 50| = |-10| = 10 and |45 - 50| = |-5| = 5.
 * Divide each of these by five. For example, 10/5 = 2 and 5/5 = 1.
 * Finally, take the smallest of the two numbers and multiply it by 10. In this example, the lower number is 1, so the result is 10. This is penalty score #4.
 *
 * @param {boolean[][]} buffer
 * @param {number} size
 * @return {number}
 */
function evaluatePenalty4(buffer, size) {
    let darkCount = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (buffer[i][j]) {
                darkCount++;
            }
        }
    }

    const percentDark = darkCount / (size * size) * 100;
    const previousMultiple5 = Math.floor(percentDark / 5) * 5;
    const nextMultiple5 = Math.ceil(percentDark / 5) * 5;

    return Math.min(Math.abs(50 - nextMultiple5) / 5, Math.abs(50 - previousMultiple5) / 5) * 10;
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {number} mask
 * @param {ECC} ecc
 * @param {boolean} [disable=false]
 */
function applyMask(
    buffer,
    dataBits,
    size,
    mask,
    ecc,
    disable = false
) {
    const formatString = disable ? '000000000000000' : generateFormatString(ecc, mask);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (canApplyMask(mask, j, i)) {
                switchColor(buffer, dataBits, i, j);
            }
        }
    }

    drawFormatString(buffer, formatString, size);
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {string} formatString
 * @param {number} size
 */
function drawFormatString(
    buffer,
    formatString,
    size
) {
    for (let i = 0; i < formatString.length; i++) {
        const c = formatString[i];
        let x;
        let y;

        if (i <= 5) {
            x = i;
            y = 8;
            fill(buffer, x, y, 1, 1, c === '1');
        } else if (i <= 7) {
            x = i + 1;
            y = 8;
            fill(buffer, x, y, 1, 1, c === '1');
        } else if (i === 8) {
            x = 8;
            y = 7;
            fill(buffer, x, y, 1, 1, c === '1');
        } else if (i <= 14) {
            x = 8;
            y = (14 - i);
            fill(buffer, x, y, 1, 1, c === '1');
        }

        if (i <= 6) {
            x = 8;
            y = size - i - 1;
            fill(buffer, x, y, 1, 1, c === '1');
        } else if (i <= 14) {
            x = size - (14 - i) - 1;
            y = 8;
            fill(buffer, x, y, 1, 1, c === '1');
        }
    }
}

/**
 *
 * @param {string} data
 * @param {boolean[][]} buffer
 * @param {boolean[][]} fillable
 * @param {number} size
 * @param {(buffer: boolean[][]) => void} drawQR
 * @param {boolean} awaitSteps
 * @param {(i: number, x: number, y: number) => void} onWriteData
 * @return {Promise<void>}
 */
async function drawData(
    data,
    buffer,
    fillable,
    size,
    drawQR,
    awaitSteps,
    onWriteData
) {
    let up = true;
    let firstcol = true;
    let x = size - 1;
    let y = size - 1;

    outer: for (let i = 0; i < data.length; i++) {
        inner: while (x >= 0 && y >= 0 && !fillable[x][y]) {
            if (up) {
                if (y === 0 && (x > 6 ? x : x + 1) % 2 === 1) {
                    x--;
                    up = false;
                    firstcol = true;
                    continue inner;
                }

                if (firstcol) {
                    x--;
                } else {
                    x++;
                    y--;
                }

                firstcol = !firstcol;
            } else {
                if (y === size - 1 && (x > 6 ? x : x + 1) % 2 === 1) {
                    x--;
                    up = true;
                    firstcol = true;
                    continue inner;
                }

                if (firstcol) {
                    x--;
                } else {
                    x++;
                    y++;
                }

                firstcol = !firstcol;
            }

            if (x === 6) {
                x--;
            }
        }

        if (x < 0 || y < 0 || x >= size || y >= size) {
            break;
        }

        if (awaitSteps) {
            drawQR(buffer);
            onWriteData(i, x, y);
            await sleep(5);
        }

        buffer[x][y] = data[i] === '1';
        fillable[x][y] = false;
    }
}

/**
 *
 * @param {boolean[][]} buffer
 * @param {boolean[][]} dataBits
 * @param {number} size
 * @param {ECC} ecc
 * @param {(buffer: boolean[][]) => void} drawQR
 * @param {boolean} awaitSteps
 * @param {(mask: number, penalty: number) => void} onMask
 * @return {Promise<number>}
 */
async function calculateBestMask(
    buffer,
    dataBits,
    size,
    ecc,
    drawQR,
    awaitSteps,
    onMask
) {
    let bestPenalty = Infinity;
    let bestMask = 0;

    for (let mask = 0; mask <= 7; mask++) {
        applyMask(buffer, dataBits, size, mask, ecc);

        const penalty1 = evaluatePenalty1(buffer, size);
        const penalty2 = evaluatePenalty2(buffer, size);
        const penalty3 = evaluatePenalty3(buffer, size);
        const penalty4 = evaluatePenalty4(buffer, size);
        const penalty = penalty1 + penalty2 + penalty3 + penalty4;
        if (penalty < bestPenalty) {
            bestMask = mask;
            bestPenalty = penalty;
        }

        onMask(mask, penalty);

        if (awaitSteps) {
            drawQR(buffer);
            await sleep(500);
        }

        applyMask(buffer, dataBits, size, mask, ecc, true);

        if (awaitSteps) {
            drawQR(buffer);
            await sleep(250);
        }
    }

    return bestMask;
}

/**
 *
 * @param {QR} qr
 * @param {(buffer: boolean[][]) => void} [drawQR]
 * @param {boolean} [awaitSteps]
 * @param {Object} params
 * @param {(mask: number, penalty: number) => void} [params.onMask]
 * @param {(i: number, x: number, y: number) => void} [params.onWriteData]
 * @return {Promise<{qr: QR, mask: number, buffer: boolean[][], applyMask: (mask: number, disable: boolean) => void}>}
 */
export async function drawQRCode(qr, drawQR = buffer => { }, awaitSteps = true, { onMask = (mask, penalty) => { }, onWriteData = (i, x, y) => { } } = {}) {
    const size = ((qr.version - 1) * 4) + 21;

    /** @type {boolean[][]} */
    const fillable = [];
    /** @type {boolean[][]} */
    const dataBits = [];
    /** @type {boolean[][]} */
    const buffer = [];

    for (let i = 0; i < size; i++) {
        fillable[i] = [];
        dataBits[i] = [];
        buffer[i] = [];
        for (let j = 0; j < size; j++) {
            fillable[i][j] = true;
            dataBits[i][j] = true;
            buffer[i][j] = false;
        }
    }

    drawFinderPattern(buffer, fillable, dataBits, size, 0, 0);
    drawFinderPattern(buffer, fillable, dataBits, size, size - 7, 0);
    drawFinderPattern(buffer, fillable, dataBits, size, 0, size - 7);

    markReservedArea(buffer, fillable, dataBits, size, 8, 0, 1, 9);
    markReservedArea(buffer, fillable, dataBits, size, 0, 8, 9, 1);
    markReservedArea(buffer, fillable, dataBits, size, size - 8, 8, 8, 1);
    markReservedArea(buffer, fillable, dataBits, size, 8, size - 8, 1, 8);

    if (qr.version >= 7) {
        markReservedArea(buffer, fillable, dataBits, size, size - 11, 0, 3, 6);
        markReservedArea(buffer, fillable, dataBits, size, 0, size - 11, 6, 3);
    }

    if (awaitSteps) {
        drawQR(buffer);
        await sleep(100);
    }

    const align = alignPatterns(qr.version);
    for (let i = 0; i < align.length; i++) {
        for (let j = 0; j < align.length; j++) {
            const x0 = align[i] - 2;
            const y0 = align[j] - 2;
            const x1 = align[i] + 2;
            const y1 = align[j] + 2;

            if (x0 < 8 && y0 < 8) {
                continue;
            }

            if (x1 > size - 7 && y0 < 8) {
                continue;
            }

            if (x0 < 8 && y1 > size - 7) {
                continue;
            }

            drawAlignPattern(buffer, fillable, dataBits, size, align[i], align[j]);

            if (awaitSteps) {
                drawQR(buffer);
                await sleep(25);
            }
        }
    }

    drawTimingPatterns(buffer, fillable, dataBits, size);

    if (awaitSteps) {
        drawQR(buffer);
        await sleep(100);
    }

    drawDarkModule(buffer, fillable, dataBits, size, qr.version);

    if (awaitSteps) {
        drawQR(buffer);
        await sleep(100);
    }

    drawVersion(buffer, size, qr.version);

    if (awaitSteps) {
        drawQR(buffer);
        await sleep(100);
    }

    await drawData(qr.data, buffer, fillable, size, drawQR, awaitSteps, onWriteData);

    const bestMask = await calculateBestMask(buffer, dataBits, size, qr.ecc, drawQR, awaitSteps, onMask);
    applyMask(buffer, dataBits, size, bestMask, qr.ecc);

    return {
        qr,
        mask: bestMask,
        buffer,
        applyMask: (mask, disable = false) => {
            if (mask === -1) {
                mask = bestMask;
            }

            applyMask(buffer, dataBits, size, mask, qr.ecc, disable);
        },
    };
}
