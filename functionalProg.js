// Functions are first class citizens

function sayHello() {
    console.log("Hello from  my function!!!");
}

const func =  sayHello;
func();
