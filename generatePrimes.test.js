const generatePrimes = require('./generatePrimes');

describe('Test if prime generation algorithm works', () => {
    describe('Case when we want to generate 1 prime', () => {
        const expected = [2];

        it('Should return an array containing the number 2', () => {
            expect(generatePrimes(1)).toStrictEqual(expected);
        })
    })
})