const sievePrimes = (limit, primeCount) => {
  if (limit <= 1) {
    return [];
  }

  let results = [];

  let limitSqrt = Math.sqrt(limit);
  let sieve = [];
  let n;

  sieve[2] = true;
  sieve[3] = true;

  // Create a sieve list with an entry for each positive integer
  // All entries of this list should initially be marked nonprime (i.e. false), except for 2 and 3
  for (let x = 1; x <= limitSqrt; x++) {
    let xx = x * x;
    for (let y = 1; y <= limitSqrt; y++) {
      let yy = y * y;
      if (xx + yy >= limit) {
        break;
      }
      // Flip n according to different quadratic criteria
      n = 4 * xx + yy;
      if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
        sieve[n] = !sieve[n];
      }

      n = 3 * xx + yy;
      if (n <= limit && n % 12 == 7) {
        sieve[n] = !sieve[n];
      }

      n = 3 * xx - yy;
      if (x > y && n <= limit && n % 12 == 11) {
        sieve[n] = !sieve[n];
      }
    }
  }

  // Mark multiples of prime squares as false (not needed for multiples of 2, 3 and 5)
  for (n = 5; n <= limitSqrt; n++) {
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
  });

  return results.splice(0, primeCount);
};

module.exports = sievePrimes;
