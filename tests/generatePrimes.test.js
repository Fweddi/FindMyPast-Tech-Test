const generatePrimes = require('../helpers/generatePrimes');

describe('Test if prime generation algorithm works', () => {
    describe('Case when we want to generate 1 prime', () => {
        const expected = [2];

        it('Should return an array containing the number 2', () => {
            expect(generatePrimes(1)).toStrictEqual(expected);
        })
    })

    describe('Case when we want to generate 2 primes', () => {
        const expected = [2, 3];

        it('Should return an array containing the numbers 2 and 3', () => {
            expect(generatePrimes(2)).toStrictEqual(expected);
        })
    })

    describe('Case when we want to generate 3 primes', () => {
        const expected = [2, 3, 5];

        it('Should return an array containing the numbers 2, 3 and 5', () => {
            expect(generatePrimes(3)).toStrictEqual(expected);
        })
    })

    describe('Case when we want to generate 7 primes', () => {
        const expected = [2, 3, 5, 7, 11, 13, 17];

        it('Should return an array containing the numbers 2, 3, 5, 7, 11, 13 and 17', () => {
            expect(generatePrimes(7)).toStrictEqual(expected);
        })
    })

    describe('Case when we want to generate 25 primes', () => {
        const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        it('Should return an array containing the numbers 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 and 97', () => {
            expect(generatePrimes(25)).toStrictEqual(expected);
        })
    })

    describe('Case when we want to generate 50000 primes', () => {
        let start = new Date().getTime();
        generatePrimes(50000);
        let end = new Date().getTime();
        let difference = end - start;

        it('Should generate 50000 primes in under 1 second', () => {
            expect(difference).toBeLessThan(1000);
        })
    })
})