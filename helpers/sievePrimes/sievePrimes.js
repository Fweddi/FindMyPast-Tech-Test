const sievePrimes = (limit, primeCount) => {
    if(limit <= 1) {
        return [];
    }
    
    // Create a results list, filled with 2, 3 and 5
    let results = [2, 3, 5];

    // Create a sieve list with an entry for each positive integer 
    // All entries of this list should initially be marked nonprime (i.e. false)
    let sieve = [];
    for (let i = 1; i <= limit; i++) {
        sieve.push(false);
    }

    // Flip n according to different quadratic criteria
    sieve.forEach((_isPrime, n) => {
        let r = n % 60;

        for (let x = 1; x * x <= limit; x++) {
            for (let y = 1; y * y <= limit; y++) {
                if (x * x + y * y >= limit) {
                    break;
                }

                if (([1, 13, 17, 29, 37, 41, 49, 53].includes(r) && n === ((4 * x * x) + (y * y)))
                    || ([7, 19, 31, 43].includes(r) && n === ((3 * x * x) + (y * y)))
                    || ([11, 23, 47, 59].includes(r) && x > y && n === ((3 * x * x) - (y * y)))) {
                    sieve[n] = !sieve[n];
                }
            }
        }
    })

    // Mark multiples of prime squares as false (not needed for multiples of 2, 3 and 5)
    for (n = 5; n * n <= limit; n++) {
        if (sieve[n]) {
            x = n * n;
            for (i = x; i <= limit; i += x) {
                sieve[i] = false;
            }
        }
    }

    // If sieve value is true, push index to results
    sieve.forEach((isPrime, n) => {
        if (isPrime) {
            results.push(n);
        }
    })

    return results.splice(0, primeCount);
}

module.exports = sievePrimes;