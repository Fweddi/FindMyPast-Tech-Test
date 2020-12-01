const calculatePadding = require('../helpers/calculatePadding');

describe('Test padding is calculated correctly', () => {
    it('Should return a string containing 4 spaces', () => {
        const result = calculatePadding(0, 4);
        expect(result).toEqual('    ');
    })

    it('Should return a string containing 3 spaces', () => {
        const result = calculatePadding(1, 4);
        expect(result).toEqual('   ');
    })

    it('Should return a string containing 1 space', () => {
        const result = calculatePadding(1234567890, 11);
        expect(result).toEqual(' ');
    })

    it('Should return a string containing no spaces', () => {
        const result = calculatePadding(12322, 1);
        expect(result).toEqual('');
    })

    it('Should return a string containing no spaces', () => {
        const result = calculatePadding(9, 1);
        expect(result).toEqual('');
    })
});