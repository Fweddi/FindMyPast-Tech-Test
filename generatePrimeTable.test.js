const generatePrimeTable = require('./generatePrimeTable');

describe('Validate input', () => {
    describe('Check input type', () => {
        it('Should give negative result where input is a string', () => {
            expect(generatePrimeTable('10')).toBe(false);
        })
        
        it('Should give positive result where input is an integer', () => {
            expect(generatePrimeTable(10)).toBe(true);
        })
    })

    describe('Check input is at least one', () => {
        it('Should give negative result where input is less than 1', () => {
            expect(generatePrimeTable(-4)).toBe(false);
        })
    })
})