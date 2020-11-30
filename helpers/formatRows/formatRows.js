const calculatePadding = require('../calculatePadding/calculatePadding');

const formatRows = (primes, multiples) => {
    let largestPrime = primes[primes.length - 1]
    let greatestDigitCount = (largestPrime * largestPrime).toString().length;

    let formattedPrimes = primes.map(prime => prime += calculatePadding(prime, greatestDigitCount));
    let firstRow = '|' + calculatePadding(0, greatestDigitCount) + '|' + formattedPrimes.join('|') + '|';

    let remainingRows = primes.map(prime => {
        let primeMultiples = Object.values(multiples[prime]);
        let formattedPrime = prime += calculatePadding(prime, greatestDigitCount);
        let formattedMultiples = primeMultiples.map(prime => prime += calculatePadding(prime, greatestDigitCount));

        return '|' + formattedPrime + '|' + formattedMultiples.join('|') + '|';
    });

    return firstRow + '\n' + remainingRows.join('\n');
}

module.exports = formatRows;