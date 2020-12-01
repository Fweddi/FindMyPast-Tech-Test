const sievePrimes = require("./sievePrimes");

const generatePrimes = (n) => {
  // If n is more than 5, sieve for estimate and take the first n elements
  if (n > 5) {
    let estimate = Math.ceil(n * Math.log(n * Math.log(n)));
    return sievePrimes(estimate, n);
  }

  // If n is less than 5, sieve for 11 and take the first n elements
  return sievePrimes(11, n);
};

module.exports = generatePrimes;
