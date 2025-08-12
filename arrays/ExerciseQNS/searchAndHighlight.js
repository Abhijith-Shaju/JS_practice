// Highlight search terms in an array of strings
const sentences = [
  'JavaScript is awesome',
  'Arrays are powerful',
  'Practice makes perfect'
];
const searchTerm = 'a';
/* Expected output:
[
  'J<b>a</b>v<b>a</b>Script is <b>a</b>wesome',
  '<b>A</b>rr<b>a</b>ys <b>a</b>re powerful',
  'Pr<b>a</b>ctice m<b>a</b>kes perfect'
]
*/

let ans = [];

for(const str of sentences){
    let arr = str.split(searchTerm.toLowerCase());
    let sub = arr.join("<b>" + searchTerm.toLowerCase() + "</>");

    arr = sub.split(searchTerm.toUpperCase());
    sub = arr.join("<b>" + searchTerm.toUpperCase() + "</>");

    ans.push(sub);
}

console.log(ans);