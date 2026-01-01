const os = require('os');
const path = require('path');
const { add, multiply, divide, subtract } = require('./math');

/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
*/

console.log("Sum :- " + add(40, 5));
console.log("Multiplication :- " + multiply(40, 5));
console.log("Subtraction :- " + subtract(40, 5));
console.log("Division :- " + divide(40, 5));