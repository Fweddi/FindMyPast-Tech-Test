const generatePrimeTable = require("../helpers/generatePrimeTable");

describe("Validate input", () => {
  describe("Check input type", () => {
    it("Should give negative result where input is a string", () => {
      expect(generatePrimeTable("10")).toBe(false);
    });

    it("Should give negative result where input is NaN", () => {
      expect(generatePrimeTable(NaN)).toBe(false);
    });

    it("Should giveß string result where input is an integer", () => {
      expect(typeof generatePrimeTable(10)).toBe("string");
    });
  });

  describe("Check input is at least one", () => {
    it("Should give negative result where input is less than 1", () => {
      expect(generatePrimeTable(-4)).toBe(false);
    });
  });
});
