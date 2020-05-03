// 04. How do you remove duplicates from an array in place?

// using Set  // Set is a new data object and when you pass in an array, it will remove any duplicate values.


const myArray = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9];

console.log([...new Set(myArray)]);

// using .filter itterator

const myArray = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9];

const removeDuplicates = data => data.filter((value, index) => data.indexOf(value) === index);

console.log(removeDuplicates(myArray));



