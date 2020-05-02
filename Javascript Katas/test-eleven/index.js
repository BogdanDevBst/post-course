// 11. How do you check if a given string is a palindrome?


const isPalindrome = myString => {
    myString = myString.replace(/\W/g, '').toLowerCase();

    return myString === myString.split('').reverse().join('');
}   

console.log(isPalindrome('I did, did I?'));
console.log(isPalindrome('Car'));



