const calculatePadding = require("./calculatePadding");

const formatRows = (allMultiples) => {
  let lastIndex = allMultiples.length - 1;
  let greatestDigitCount = allMultiples[lastIndex][lastIndex].toString().length;

  let rows = allMultiples.map((multiples) => {
    let formattedMultiples = multiples.map((multiple) => {
      let padding = calculatePadding(multiple, greatestDigitCount);
      return multiple ? (multiple += padding) : padding;
    });
    return "|" + formattedMultiples.join("|") + "|";
  });

  return rows.join("\n");
};

module.exports = formatRows;
