// 06. How do you find all pairs of an integer array whose sum is equal to a given number?

const getAllPairs = (numbers, targetNumber) => {
    const map = [];
    const indexNum = [];

    for(i = 0; i < numbers.length; i++) {
        if (map[numbers[i]] != null) {
            let index = map[numbers[i]];
            indexNum[0] = index;
            indexNum[1] = i;
            break;
        }else {
            map[targetNumber - numbers[i]] = i;
        }
    }
    return indexNum;
}

console.log(getAllPairs([10, 20, 10, 40, 50, 60, 70], 30));
