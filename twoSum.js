// Find two numbers that add up to a target
const twoSumNums = [2, 7, 11, 15, -2];
const target = 9;
// Expected output: [0, 1] (indices of 2 and 7)

let ans = [];

for(let i = 0; i < twoSumNums.length; i++){
    for(let j = i+1; j < twoSumNums.length; j++){
        if(twoSumNums[i] + twoSumNums[j] == target){
            ans.push(i, j);
            console.log(ans);
            return;
        }
    }
}