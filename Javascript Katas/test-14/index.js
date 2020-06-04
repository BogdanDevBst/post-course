// 14. How do you swap two numbers without using a third variable?

const swapTwoNumbers = (string) => {
  let a = string[0];
  let b = string[1];

  a = a + b;
  b = a - b;
  a = a - b;

  return [a, b];
};

console.log(swapTwoNumbers([5, 10]));
console.log(swapTwoNumbers([10, 5]));
