const generatePrimeTable = require('./generatePrimeTable');

it('Should give negative result for string', () => {
    expect(generatePrimeTable('10')).toBe(false);
})