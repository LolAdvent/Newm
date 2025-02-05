// Declare a constant for the password since it should not change
const password = "(d0nteatTheScript)";  

// Check if the password starts with a space
const startsWithSpace = password.startsWith(" ");

// Check if the password has at least 8 characters
const hasMinimumLength = password.length >= 8;

// Check if the password contains the word "eat"
const containsEat = password.includes("eat");

// Log results to the console
console.log("Does the password start with a space? " + startsWithSpace);
console.log("Does the password have at least 8 characters? " + hasMinimumLength);
console.log("Does the password contain the word 'eat'? " + containsEat);
