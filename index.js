function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
console.log(isPalindrome('abba'))


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/ // find the length of a string
// loop through half of the string
// check if first and last string are same
// take input
// call the function

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
