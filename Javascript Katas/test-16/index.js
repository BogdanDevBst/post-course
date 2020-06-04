// 16. How do you check if a string contains only digits?

const onlyDigits = (string) => parseInt(string).toString() === string;

console.log(onlyDigits("abcd"));
console.log(onlyDigits("ab12"));
console.log(onlyDigits("1234"));
