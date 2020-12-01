const formatRows = require("../helpers/formatRows");

describe("Test multiplication table formatting", () => {
  describe("Should give a 2x2 table when N is 1", () => {
    const multiples = [
      [null, 2],
      [2, 4],
    ];

    it("Should return a string with the correct format", () => {
      const result = formatRows(multiples);
      const regex = /^(((\|\s*(\|\d+\s*){1}\|)\n){1}(((\|\d+\s*){2}\|)(\n)){0}((\|\d+\s*){2}\|){1})$/;
      const isCorrectFormat = !!result.match(regex);

      expect(isCorrectFormat).toEqual(true);
    });
  });

  describe("Should give a 3x3 table when N is 2", () => {
    const multiples = [
      [null, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ];

    it("Should return a string with the correct format", () => {
      const result = formatRows(multiples);
      const regex = /^(((\|\s*(\|\d+\s*){2}\|)\n){1}(((\|\d+\s*){3}\|)(\n)){1}((\|\d+\s*){3}\|){1})$/;
      const isCorrectFormat = !!result.match(regex);

      expect(isCorrectFormat).toEqual(true);
    });
  });

  describe("Should give a 4x4 table when N is 3", () => {
    const multiples = [
      [null, 2, 3, 5],
      [2, 4, 6, 10],
      [3, 6, 9, 15],
      [5, 10, 15, 25],
    ];

    it("Should return a string with the correct format", () => {
      const result = formatRows(multiples);
      const regex = /^(((\|\s*(\|\d+\s*){3}\|)\n){1}(((\|\d+\s*){4}\|)(\n)){2}((\|\d+\s*){4}\|){1})$/;
      const isCorrectFormat = !!result.match(regex);

      expect(isCorrectFormat).toEqual(true);
    });
  });
});
