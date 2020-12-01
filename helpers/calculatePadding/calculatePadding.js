const calculatePadding = (num, greatestDigitCount) => {
    let digitCount = num > 0 ? num.toString().length : 0;
    let spacesCount = greatestDigitCount - digitCount;
    return ' '.repeat(spacesCount > 0 ? spacesCount : 0);
}

module.exports = calculatePadding;