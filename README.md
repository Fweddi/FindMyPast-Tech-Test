To run this script you will need node.js installed. Run `npm i` in the project root to install the necessary packages.

To run the script itself, run `node script.js {n}` where `n` is the amount of prime numbers you want to generate a multiplication table for.

For example, to generate a prime multiplication table for 3 prime numbers, run `node script.js 3` in the project root.

This should return the following output:
```
|  |2 |3 |5 |
|2 |4 |6 |10|
|3 |6 |9 |15|
|5 |10|15|25|
```

To run the test suite, run `npm run test` in the project root. There are unit tests for every helper, including a timed test for generating 50,000 primes in under a second. The algorithm implemented is the Sieve of Atkin, which runs in O(N). Multiplication and display logic takes the complexity up to O(N^2).

I am pleased with the TDD approach I took, which led to robust and easily maintainable code. It allowed me to substitute in different sieving and multiplication implementations to improve performance, whilst knowing that the script still worked in the same way.

If I had more time, I would (1) look into other sieving algorithms with less time complexity, and (2) remove the need to loop over the same data twice with the multiplication and display logic.