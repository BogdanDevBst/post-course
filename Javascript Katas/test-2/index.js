// 02. How do you find the duplicate number on a given integer array?

let strArray = [ 1, 2, 2, 3, 4, 5, 6, 7, 8];

const findDuplicates = number => number.filter((item, index) => number.indexOf(item) != index);

console.log(findDuplicates(strArray)) // All duplicates