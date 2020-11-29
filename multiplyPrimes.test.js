const multiplyPrimes = require('./multiplyPrimes');

describe('Test if primes are multiplied together', () => {
    describe('Case when there is 1 prime', () => {
        const primes = [2];
        const expected = {
            2: {
                2: 4
            }
        };

        it('Should give a hash map of 2 multiplied by itself', () => {
            expect(multiplyPrimes(primes)).toStrictEqual(expected);
        })
    })
})