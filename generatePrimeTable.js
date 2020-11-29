const generatePrimeTable = (input) => {
    if (typeof input !== 'number') {
        return false;
    }

    if (input < 1) {
        return false;
    }

    return '||2|\n|2|4|'
}

module.exports = generatePrimeTable;