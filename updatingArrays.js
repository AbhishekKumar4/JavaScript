const sample = [1,2,5];

//Adding
const index = sample.indexOf(2);
const updated = [
    ...sample.slice(0, index),
    4,
    ...sample.slice(index)
]

console.log(updated);

//Remove 2

const removed = sample.filter(n=> n!=2);
console.log(removed);

//updating
const mapped = sample.map( n => n===2 ? 20 : n);
console.log(mapped);