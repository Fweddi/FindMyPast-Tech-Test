const { generatePrimes, multiplyPrimes, formatRows } = require('./helpers');

const generatePrimeTable = (n) => {
    if (typeof n !== 'number' || isNaN(n)) {
        return false;
    }

    if (n < 1) {
        return false;
    }

    let primes = generatePrimes(n);

    let multiples = multiplyPrimes(primes);

    return formatRows(multiples);
}

module.exports = generatePrimeTable;