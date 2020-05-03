// 05. How do you find the largest and smallest number in an unsorted integer array?

const numbers = [2, 3, 4, 1, 5, 6, 8, 7, 9, 22, 43, 54, 23, 22, 12, 34];

let minNum = numbers[0];
let maxNum = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxNum) {
        maxNum = numbers[i];
    } else if (numbers[i] < minNum)
        minNum = numbers[i];
}

console.log(maxNum);
console.log(minNum);
