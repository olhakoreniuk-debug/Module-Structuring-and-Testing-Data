function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here 3 times.
// Because in the return statement there are exactly three calls: pad(totalHours), pad(remainingMinutes), and pad(remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The first call is pad(totalHours), and for input 61, totalHours = 0. So num = 0.

// c) What is the return value of pad is called for the first time?
// The return value of the first call pad(0) is "00". pad(0) does this: 0 .toString() → "0" 
// "0".padStart(2, "0") → "00"
// So the return value is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer 
// The last (3rd) call is pad(remainingSeconds).
// For input 61, remainingSeconds = 1. So num = 1.
// Because the last function call in the template string is pad(remainingSeconds), and for 61, remainingSeconds equals 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The return value of the last call pad(1) is "01". pad(1) does this: 1 .toString() → "1" 
// "1".padStart(2, "0") → "01"
// So the return value is "01".
// Because padStart(2, "0") adds one "0" on the left so the string has 2 characters.