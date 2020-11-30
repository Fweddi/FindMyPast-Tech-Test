const multiplyPrimes = (primes) => {
    let multiples = {};
    primes.forEach(primeA => {
        primes.forEach(primeB => {
            multiples[primeA] = { ...multiples[primeA], [primeB]: primeA * primeB }
        })
    })

    return multiples;
}

module.exports = multiplyPrimes;