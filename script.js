const generatePrimeTable = require("./generatePrimeTable");

if(process.argv.length < 3) {
    console.error('Error: Input parameter required')
    return;
}

let input = parseInt(process.argv[2], 10);

console.log(generatePrimeTable(input));