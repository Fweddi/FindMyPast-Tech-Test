const formatRows = require('./formatRows');

describe('Test multiplication table formatting', () => {
    describe('Should give a 2x2 table when N is 1', () => {
        const primes = [2];
        const multiples = {
            2: {
                2: 4
            }
        };

        it('Should return a string with the correct format', () => {
            const result = formatRows(primes, multiples);
            const regex = /^(((\|(\|\d+){1}\|)\n){1}(((\|\d+){2}\|)(\n)){0}((\|\d+){2}\|){1})$/;
            const isCorrectFormat = !!result.match(regex)

            expect(isCorrectFormat).toEqual(true);
        })
    })
})