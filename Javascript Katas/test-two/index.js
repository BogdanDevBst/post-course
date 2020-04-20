// 02. How do you find the duplicate number on a given integer array?

let strArray = [ 1, 2, 2, 3, 3, 4, 5, 6, 7, 8];
const findDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) != index);

console.log(findDuplicates(strArray)) // All duplicates