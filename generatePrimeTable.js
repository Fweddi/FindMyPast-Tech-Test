const formatRows = require('./formatRows');
const generatePrimes = require('./generatePrimes');
const multiplyPrimes = require('./multiplyPrimes');

const generatePrimeTable = (n) => {
    if (typeof n !== 'number') {
        return false;
    }

    if (n < 1) {
        return false;
    }

    let primes = generatePrimes(n);

    let multiples = multiplyPrimes(primes);

    return formatRows(primes, multiples);
}

module.exports = generatePrimeTable;