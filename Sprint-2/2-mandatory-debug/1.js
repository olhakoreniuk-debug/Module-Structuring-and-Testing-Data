// Predict and explain first...
//  =============> write your prediction here
// There will be an error because the function sum does not return any value, so when we try to use its result in a template literal, it will be undefined.

function sum(a, b) {
  return  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum was missing a return statement. I added "return  a + b;" to fix the error.
// Finally, correct the code to fix the problem
//  =============> write your new code here
