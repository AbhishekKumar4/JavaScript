// Functions are first class citizens //

function sayHello() {
    console.log("Hello from  my function!!!");
}

const func =  sayHello;
func();

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
