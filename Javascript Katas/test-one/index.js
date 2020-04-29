// 01. How do you find the missing numbers in a given integer array?

const myIntegerArray = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 19];

const missingNumbers = Math.max.apply(Math, myIntegerArray);

let matchNum = [];

for (i = 0; i < missingNumbers; i++) {
    if ( myIntegerArray.indexOf(i) < 0 ) {
        matchNum.push(i);
    }
}

console.log(matchNum);