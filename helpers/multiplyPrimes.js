const multiplyPrimes = (primes) => {
  if (primes.length === 0) {
    return null;
  }

  let firstMultiples = [null, ...primes];
  let allMultiples = [firstMultiples];

  primes.forEach((primeA) => {
    let multiples = [primeA];
    primes.forEach((primeB) => {
      let multiple = primeA * primeB;
      multiples.push(multiple);
    });
    allMultiples.push(multiples);
  });

  return allMultiples;
};

module.exports = multiplyPrimes;
