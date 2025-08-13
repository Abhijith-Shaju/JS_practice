// Given an array of objects [{name: "John"}, {name: "Jane"}], use map to extract an array of names.

const arr = [{name: "John"}, {name: "Jane"}];

const names = arr.map( (item) => item.name);

console.log(names);