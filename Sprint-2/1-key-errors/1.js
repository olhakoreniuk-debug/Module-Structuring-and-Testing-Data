// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.6));

// =============> write your explanation here 
//SyntaxError: Identifier 'decimalNumber' has already been declared. I have deleted the row that duplicated the declaration to fix the error. It also was an error after console.log as it did not called the function with an argument.

// Finally, correct the code to fix the problem
// =============> write your new code here
