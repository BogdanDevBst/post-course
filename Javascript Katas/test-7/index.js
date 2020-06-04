// 07. How do you reverse the words in a sentence?

const reverseWords = (sentence) =>
  sentence.split(" ").reverse().join(" ").toLowerCase();

console.log(reverseWords("That hat is to big for me"));
