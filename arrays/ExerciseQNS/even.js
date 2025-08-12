// Create a new array with only even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// Expected output: [2, 4, 6, 8]

const even = nums.filter(a => a%2 === 0);
console.log(even);