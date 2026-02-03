// Predict and explain first...

// =============> write your prediction here
// There will be an error because the function multiply does not return any value, so when we try to use its result in a template literal, it will be undefined.
// The result of multiplying 10 and 32 is undefined


function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply was missing a return statement. I added "return a * b;" to fix the error.

// Finally, correct the code to fix the problem
//  =============> write your new code here
