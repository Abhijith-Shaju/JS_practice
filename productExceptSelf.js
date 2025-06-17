// Return array where each element is product of all other elements
const productNums = [1, 2, 3, 4];
// Expected output: [24, 12, 8, 6]

let ans = [];

for(let i = 0; i < productNums.length; i++){
    let sub = productNums.reduce( (acc, irr) => acc * irr, 1 );
    ans.push((sub / productNums[i]));
}

console.log(ans);