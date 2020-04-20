// 01. How do you find the missing numbers in a given integer array?

const myArray = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 19]; // should output 0, 4, 7, 10, 16, 18
const arrayLength = Math.max.apply(Math, myArray); // Because Math is not a constructor, max() is a static method of Math ( Always use it as Math.max(), rather than as a method of an instanced Math object).
let missingNumber = [];

for (i = 0; i < arrayLength; i++) {
    if ( myArray.indexOf(i) < 0 ) {
        missingNumber.push(i);
    }
}

console.log(missingNumber);