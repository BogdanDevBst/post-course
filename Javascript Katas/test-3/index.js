// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?

let strArray = [1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8];

const findDuplicates = (numbers) =>
  numbers.filter((item, index) => numbers.indexOf(item) != index);

console.log([...new Set(findDuplicates(strArray))]); // Unique duplicates

const checkMultipleDuplicates = (numbers) =>
  new Set(numbers).size !== numbers.length;

console.log(checkMultipleDuplicates([1, 2, 2, 3, 4, 5, 6, 6, 1]));
