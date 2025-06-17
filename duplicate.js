// Remove duplicate values from an array
const duplicates = [1, 2, 2, 3, 4, 4, 5];
// Expected output: [1, 2, 3, 4, 5]


const ans = duplicates.sort( (a, b) => a > b );

for(let i = 0; i < ans.length; i++){
    if(ans[i] == ans[i+1]) ans.splice(i, 1);
}

// const ans = Set(...duplicates);

console.log(ans);