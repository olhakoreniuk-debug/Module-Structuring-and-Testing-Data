// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let va = `${str[0].toUpperCase()}${str.slice(1)}`;
  return va;
}
let result = capitalise("hello");
console.log(result);
// =============> write your explanation here
// it was SyntaxError: Identifier 'str' has already been declared. I have changed the name of the parameter from str to va to fix the error.

// =============> write your new code here

