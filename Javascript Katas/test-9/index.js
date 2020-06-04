// 09. How do you check if two strings are anagrams of each other?

const checkArray = (stringOne, stringTwo) => {
  return typeof stringOne === "string" && typeof stringTwo === "string"
    ? stringOne.toLowerCase().split("").sort().join("") ===
        stringTwo.toLowerCase().split("").sort().join("")
    : "Invalid Input";
};

console.log(checkArray("bobo", "Obob"), "true");
console.log(checkArray("boBo", "boo4b"), "false");
console.log(checkArray("dog", "god"), "true");
console.log(checkArray("gabety", "gabmen"), "false");
console.log(checkArray("gabetyasdw", "gabmenasdw"), "false");

let firstWord = "Kaka";
let secondWord = "Akak";

const isAnagram = (first, second) => {
  lowerFirst = first.toLowerCase().split("").sort().join(""); // For case insensitivity, change both words to lowercase.
  lowerSecond = second.toLowerCase().split("").sort().join(""); // Sort the strings, and join the resulting array to a string.

  return lowerFirst === lowerSecond;
};

console.log(isAnagram(firstWord, secondWord));
