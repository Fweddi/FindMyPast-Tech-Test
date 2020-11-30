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
            const regex = /^(((\|\s*(\|\d+\s*){1}\|)\n){1}(((\|\d+\s*){2}\|)(\n)){0}((\|\d+\s*){2}\|){1})$/;
            const isCorrectFormat = !!result.match(regex)

            expect(isCorrectFormat).toEqual(true);
        })
    })

    describe('Should give a 3x3 table when N is 2', () => {
        const primes = [2, 3];
        const multiples = {
            2: {
                2: 4,
                3: 6
            },
            3: {
                2: 6,
                3: 9
            }
        };

        it('Should return a string with the correct format', () => {
            const result = formatRows(primes, multiples);
            const regex = /^(((\|\s*(\|\d+\s*){2}\|)\n){1}(((\|\d+\s*){3}\|)(\n)){1}((\|\d+\s*){3}\|){1})$/;
            const isCorrectFormat = !!result.match(regex)

            expect(isCorrectFormat).toEqual(true);
        })
    })

    describe('Should give a 4x4 table when N is 3', () => {
        const primes = [2, 3, 5];
        const multiples = {
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

        it('Should return a string with the correct format', () => {
            const result = formatRows(primes, multiples);
            const regex = /^(((\|\s*(\|\d+\s*){3}\|)\n){1}(((\|\d+\s*){4}\|)(\n)){2}((\|\d+\s*){4}\|){1})$/;
            const isCorrectFormat = !!result.match(regex)

            expect(isCorrectFormat).toEqual(true);
        })
    })
})