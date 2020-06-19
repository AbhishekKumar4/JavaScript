// Currying :- Named after Haskell Curry

let input  = "    JavaScript    ";

// trim
const trim = str => str.trim();
// wrap inside span element
const wrap = (type, str) => `<${type}>${str}</${type}>`;

const toLowerCase = str => str.toLowerCase;

// currying : converting n arguments function to single argument function
function add(a, b) {
    return a+b;
}
// In currying is written as 

function add1(a) {
    return function(b) {
        return a+b; 
    }
}

const result = add1(2)(3);
console.log(result);

// re-write function as arrow function
const add2 = a => b => a+b;
const result2 = add2(3)(2);
console.log(result2)

