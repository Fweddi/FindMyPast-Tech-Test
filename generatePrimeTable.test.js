const generatePrimeTable = require('./generatePrimeTable');

describe('Validate input', () => {
    describe('Check input type', () => {
        it('Should give negative result where input is a string', () => {
            expect(generatePrimeTable('10')).toBe(false);
        })
        
        it('Should give string result where input is an integer', () => {
            expect(typeof generatePrimeTable(10)).toBe('string');
        })
    })

    describe('Check input is at least one', () => {
        it('Should give negative result where input is less than 1', () => {
            expect(generatePrimeTable(-4)).toBe(false);
        })
    })
})

describe('Test multiplication tables', () => {
    describe('Should give a 2x2 table when N is 1', () => {
        it('Should return a string with the correct format', () => {
            const result = generatePrimeTable(1);
            const regex = /^(((\|(\|\d+){1}\|)\n){1}(((\|\d+){2}\|)(\n)){0}((\|\d+){2}\|){1})$/;
            const isCorrectFormat = !!result.match(regex)

            expect(isCorrectFormat).toEqual(true);
        })
    })
})