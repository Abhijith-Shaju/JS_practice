// Calculate the sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];
// Expected output: 15

const sum = numbers.reduce( (a, b) => a + b, 0);

console.log(sum);