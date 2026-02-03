const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result. But they declare a block-scoped, read-only named constant.

// b) How many function calls are there?
// There is 1 function call: console.log.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. In this context, it is used to determine the number of seconds remaining after converting the total movie length from seconds into full minutes. Since there are 60 seconds in a minute, using the modulus operator (%) with 60 gives us the leftover seconds that do not make up a complete minute.
//The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 is calculating the total number of full minutes in the movie length. The expression (movieLength - remainingSeconds) removes the leftover seconds from the total movie length, leaving only the seconds that can be fully converted into minutes. By dividing this adjusted value by 60, we convert the total seconds into minutes. Thus, totalMinutes represents the total number of complete minutes in the movie length, excluding any remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string that shows the movie length in hours, minutes, and seconds (HH:MM:SS). A better name for this variable could be formattedMovieLength or movieDurationFormatted, as these names more clearly indicate that the variable holds a string representation of the movie's duration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all non-negative integer values of movieLength, as it correctly converts seconds into hours, minutes, and seconds format. However, if movieLength is negative or not an integer, the code may produce unexpected results or errors. For example, a negative movie length does not make sense in this context, and a non-integer value could lead to fractional seconds, which are not typically represented in a time format. Therefore, while the code is robust for valid inputs, it may require additional validation to handle edge cases appropriately.
