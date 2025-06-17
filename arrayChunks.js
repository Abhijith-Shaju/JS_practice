// Split array into chunks of given size
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
/* Expected output:
[[1, 2, 3], [4, 5, 6], [7, 8]]
*/

const chunk = Math.ceil(data.length / chunkSize); 

let ans = [];
for(let i = 0; i < chunk; i++){
    ans.push([]);
}

let count = 0;
for(let i = 0; i < data.length; i+=chunkSize){
    for(let j = i; j < i+chunkSize; j++){
        if(j >= data.length){
            break;
        }
        ans[count].push(data[j]);
    }
    count++;
}

console.log(ans);