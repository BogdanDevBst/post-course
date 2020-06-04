// 11. How do you check if a given string is a palindrome?

const isPalindrome = (str) => {
  str = str.toLowerCase(); // turn the string to lowercase

  return str === str.split("").reverse().join(""); // reverse input string and return the result of the // comparisong
};

console.log(isPalindrome("I did, did I?"));
console.log(isPalindrome("Car"));
console.log(isPalindrome("bob"));
