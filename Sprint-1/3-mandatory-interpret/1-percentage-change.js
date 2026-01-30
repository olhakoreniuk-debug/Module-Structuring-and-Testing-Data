let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//   (A function call is when you use a function - e.g. console.log(...), or Number(...), or replaceAll(...)) Here there are 5 function calls: Number, Number replaceAll, replaceAll, and console.log.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error was because of missing coma in the line 5.

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are variable reassignment statements.

// d) Identify all the lines that are variable declarations
// Lines 1 and 2 are variable declarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression carPrice.replaceAll(",", "") is replacing all commas in the carPrice string with an empty string, effectively removing them. This is necessary because the presence of commas would prevent the string from being converted to a number correctly. The Number(...) function then takes the resulting string (which now contains only numeric characters) and converts it into a numerical value that can be used for mathematical calculations.