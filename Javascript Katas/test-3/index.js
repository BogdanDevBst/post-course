// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?

let strArray = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8];
const findDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) != index);

console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates