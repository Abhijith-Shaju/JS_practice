// Find the missing number in a sequence from 1 to N
const arr = [1, 2, 3, 5, 6, 7, 8];
// Expected output: 4

let i = 1;
for(const num of arr){
    if(num !== i){
        for(let j = i; j < num; j++){
            console.log(j);
            i++;
        }
    }
    i++;
}