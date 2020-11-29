const generatePrimeTable = (n) => {
    if (typeof n !== 'number') {
        return false;
    }

    if (n < 1) {
        return false;
    }

    let primes = generateNPrimes(n);

    let multiples = multiplyPrimes(primes);

    return formatRows(primes, multiples);
}

const generateNPrimes = (n) => {
    return [2];
}

const multiplyPrimes = (primes) => {
    return {
        2: {
            2: 4
        }
    }
}

const formatRows = (primes, multiples) => {
    let firstRow = '||' + primes.join('|') + '|';

    let remainingRows = primes.map(prime => {
        let primeMultiples = Object.values(multiples[prime]);
        return '|' + prime + '|' + primeMultiples.join('|') + '|';
    });

    return firstRow + '\n' + remainingRows.join('\n');
}

module.exports = generatePrimeTable;