// 05. How do you find the largest and smallest number in an unsorted integer array?

let numbers = [2, 3, 4, 1, 5, 6, 8, 7, 9, 22, 43, 54, 23, 22, 12, 34];

const smallestNumber = Math.min(...numbers);
const largestNumber = Math.max(...numbers);

console.log(smallestNumber);
console.log(largestNumber);
