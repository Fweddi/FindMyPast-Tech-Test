const formatRows = (primes, multiples) => {
    let firstRow = '||' + primes.join('|') + '|';

    let remainingRows = primes.map(prime => {
        let primeMultiples = Object.values(multiples[prime]);
        return '|' + prime + '|' + primeMultiples.join('|') + '|';
    });

    return firstRow + '\n' + remainingRows.join('\n');
}

module.exports = formatRows;