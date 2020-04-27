// 01. How do you find the missing numbers in a given integer array?

let myArray = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 19]; // should output 0, 4, 7, 10, 16, 18

export const missingNumberInSequence = Math.max.apply(Math, myArray); // Because Math is not a constructor, max() is a static method of Math ( Always use it as Math.max(), rather than as a method of an instanced Math object).

let matchNum = [];

for (i = 0; i < missingNumberInSequence; i++) {
    if ( myArray.indexOf(i) < 0 ) {
        matchNum.push(i);
    }
    return matchNum
}

// console.log(missingNumberInSequence);