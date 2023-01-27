module.exports = function toReadable (number) {
    const base = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    let hundreds = Math.trunc(number / 100); // целые сотни
    let tensLastOne = Math.trunc(number / 10) * 10; // целые десятки
    let tens = Number(number.toString().substring(1)); // десятичный остаток
    let tensOne = Math.trunc(tens / 10) * 10;
    let tensLast = Number(tens.toString().substring(1)); // единичный остаток
    let tensLastTwo = Number(number.toString().substring(1)); // единичный остаток

    if (number >= 100 && number % 100 === 0) {
        return `${base[hundreds]} hundred`;
    } else if (number >= 100 && (number % 100) % 10 === 0 && tens > 19) {
        return `${base[hundreds]} hundred ${base[tens]}`;
    } else if (number >= 100 && tens > 19) {
        return `${base[hundreds]} hundred ${base[tensOne]} ${base[tensLast]}`;
    } else if (number >= 100 && tens <= 19) {
        return `${base[hundreds]} hundred ${base[tens]}`;
    } else if (number < 100 && number % 10 === 0) {
        return `${base[tensLastOne]}`;
    } else if (number < 100 && number > 19) {
        return `${base[tensLastOne]} ${base[tensLastTwo]}`;
    } else {
        return `${base[number]}`;
    }
};