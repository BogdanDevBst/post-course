// 01. How do you find the missing numbers in a given integer array?

const myIntegerArray = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 19, 22, 24, 25];

const missingNumbers = Math.max(...myIntegerArray);

let matchNum = [];

for (i = 1; i < missingNumbers; i++) {
    if ( myIntegerArray.indexOf(i) === -1 ) {
        matchNum.push(i);
    }
}

console.log(matchNum);


// const findMissingNumber = (numbers) => {
//     const sortedNumbers = numbers.sort((a, b) => a - b);
//     const lastNumber = sortedNumbers[sortedNumbers.length - 1];
//     let match = [];
//     for (let i = sortedNumbers[0]; i <= lastNumber; i++) {
//       if (sortedNumbers.indexOf(i) === -1) {
//         match.push(i);
//       }
//     }
//     console.log(match);
//   };
  
//   findMissingNumber([1, 2, 4, 5, 9, 10]);
  