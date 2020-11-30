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

    describe('Case when there are 2 primes', () => {
        const primes = [2,3];
        const expected = {
            2: {
                2: 4,
                3: 6
            },
            3: {
                2: 6,
                3: 9
            }
        };

        it('Should give a hash map of possible multiples for 2 and 3', () => {
            expect(multiplyPrimes(primes)).toStrictEqual(expected);
        })
    })

    describe('Case when there are 3 primes', () => {
        const primes = [2,3,5];
        const expected = {
            2: {
                2: 4,
                3: 6,
                5: 10
            },
            3: {
                2: 6,
                3: 9,
                5: 15
            },
            5: {
                2: 10,
                3: 15,
                5: 25
            }
        };

        it('Should give a hash map of possible multiples for 2, 3 and 5', () => {
            expect(multiplyPrimes(primes)).toStrictEqual(expected);
        })
    })
})