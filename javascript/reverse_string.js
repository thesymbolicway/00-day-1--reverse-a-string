function reverseString(str) {
  let reversed_string = "";
  for (let i = str.length - 1; i >= 0; i--) {
      reversed_string += str[i];
  }
  return reversed_string;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Initialize an empty string called "reversed_string"
// Iterate through the input string starting from the last index
// For each character, add it to the "reversed_string"
// Return "reversed_string"
