// Functions are first class citizens //

function sayHello() {
    console.log("Hello from  my function!!!");
}

const func =  sayHello;
func();

// Higher order functions -> which takes an argument or return function as argument or both//
// Instead of working on strings number or boolean they go on higher order of functions, therefore known as higher order functions//
//1) functions as an argument to another function

function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello);

// returning a function from a function

function dummy() {
    return function() {
        return "hello world";
    }
}

const x = dummy();
console.log(x());

// Example //

let input  = "    JavaScript    ";

// trim
const trim = str => str.trim();
// wrap inside div element
const wrapInDiv = str => `<div>${str}</div>`;
//below is also called function composition in functional programming
const result = wrapInDiv(trim(input));
console.log(result);

//Alternative to cleaner functional composition is using compose and piping in LODASH//


