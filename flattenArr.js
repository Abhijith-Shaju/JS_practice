// Flatten an array of nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
// Expected output: [1, 2, 3, 4, 5, 6]

const ans = [];

function nest(x){
    for(const n of x){
        if(Array.isArray(n)){
            nest(n);
        }else{ans.push(n);}
    }
}

nest(nested);
console.log(ans);