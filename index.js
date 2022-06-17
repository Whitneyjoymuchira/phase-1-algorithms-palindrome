function isPalindrome(word) {

  const string = 'madam?'
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {

    if (string[i] !== string[len - 1 - i]) {
      return 'false';
    }
  }
  return 'true';
}

isPalindrome("madam")
console.log(isPalindrome("madam"));


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
