// 12. How can a given string be reversed using recursion?

const reverseString = string => string ? reverseString(string.substr(1)) + string[0] : string;

console.log(reverseString('Hello world!, racecar'));

