// Rotate array elements by N positions
const rotateArray = [1, 2, 3, 4, 5];
const positions = 2;
// Expected output: [4, 5, 1, 2, 3] (right rotation)

for(let i = 0; i < positions; i++){
    rotateArray.unshift(rotateArray.pop());
}

console.log(rotateArray);