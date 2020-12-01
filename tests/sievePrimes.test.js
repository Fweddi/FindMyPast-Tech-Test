const sievePrimes = require('../helpers/sievePrimes');

describe('Test if prime generation algorithm works', () => {
    describe('Case when prime count is -1', () => {
        const expected = [];

        it('Should return an empty array', () => {
            expect(sievePrimes(3, -1)).toStrictEqual(expected);
        })
    })

    describe('Case when upper limit is -1', () => {
        const expected = [];

        it('Should return an empty array', () => {
            expect(sievePrimes(-1, 2)).toStrictEqual(expected);
        })
    })

    describe('Case when upper limit is 1', () => {
        const expected = [];

        it('Should return an empty array', () => {
            expect(sievePrimes(1, 3)).toStrictEqual(expected);
        })
    })

    describe('Case when upper limit is 2', () => {
        const expected = [2];

        it('Should return an array containng the number 2', () => {
            expect(sievePrimes(2, 1)).toStrictEqual(expected);
        })
    })

    describe('Case when upper limit is 5', () => {
        const expected = [2, 3, 5];

        it('Should return an array containng the numbers 2, 3 and 5', () => {
            expect(sievePrimes(5, 3)).toStrictEqual(expected);
        })
    })

    describe('Case when upper limit is 12', () => {
        const expected = [2, 3, 5, 7, 11];

        it('Should return an array containng the numbers 2, 3, 5, 7 and 11', () => {
            expect(sievePrimes(12, 5)).toStrictEqual(expected);
        })
    })
})