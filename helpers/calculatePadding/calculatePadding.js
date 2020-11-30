const calculatePadding = (num, greatestDigitCount) => {
    let digitCount = num > 0 ? num.toString().length : 0;
    let paddingCount = greatestDigitCount - digitCount;
    let padding = '';
    for(i = 1; i <= paddingCount; i++) {
        padding += ' ';
    }

    return padding;
}

module.exports = calculatePadding;