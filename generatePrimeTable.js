const generatePrimeTable = (input) => {
    if (typeof input !== 'number') {
        return false;
    }

    if (input < 1) {
        return false;
    }

    return true;
}

module.exports = generatePrimeTable;