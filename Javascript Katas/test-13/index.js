// 13. How do you check if two strings are a rotation of each other?

const checkRotationStrings = (string, rotated) => string.length === rotated.length && rotated.repeat(2).includes(string);

console.log(checkRotationStrings('waterbottle', 'lewaterbott')); 
console.log(checkRotationStrings('waterbottle', 'bottlewater'));
console.log(checkRotationStrings('waterbottle', 'erbottllewat'))
console.log(checkRotationStrings('waterbottle', 'lewaterbottx'));
console.log(checkRotationStrings('waterbottle', 'ttlewaterb'));