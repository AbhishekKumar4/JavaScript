# JavaScript

- Is interpreted language.
- Each browser has its own javascript engine, which either interprets the codeor use some sort of lazy compilation.
- V8 Engine used in Chrome and NodeJS
    - Spidermonkey used in firefox.
    - Javascript core used in Safari.
    - Chakra used in Microsoft IE and Edge.
- They each implement the ECMAscript standard, but may differ for anything not defined by the standards.

# Dynamic Typing
# Primitive Types (no methods, immutable)
    - undefined
    - null
    - boolean
    - number (-ve, +ve, floats, numbers)
    - string
    - (symbol) special in ES6
  
  - Objects

# Typecasting? Coercion(Changing one type to another)
    - const x = 42;
    - const explicit = String(x); // explicit === 42
    - const implicit = x + "";    // implicit === 42
    
- == vs. ===
    - == coerces the types
    - === requires equivalent types.
    
# Operators
    - Arithmetic Operators
        - +, -, /, *, %, ++, --, +=, -=
    - Relational Operators
        - ==, ===, !=, >, <, >=, <=
    - Logical Operators
        - !, &&, ||
# Conditions
    - Conditional Statements
        - if, else, else if
    - Conditional Operators
        - (isTrue) ? dothis : elseDothis
    - Switch Statements
# Functions
    - Function (Simply a block of code that can be executed many times in different places)
    - Scope of Variables
    - Function expression anonymous functions
    
# Objects

/*
var emp =  {
   name : 'abhishek',
   age : 31,
   isAdult : function() {
      if(this.age >18) {
         return true;
      }
      return false;
   },
   toString : function() {
      return 'Name : ' +this.name +  'Age : ' + this.age; 
   }
   
}
*/
//console.log(emp);


function emp(name, age) {
  this.name = name;
  this.age = age,
  this.toString = function() {
   return 'Name : ' +this.name +  'Age : ' + this.age; 
  };
}

var x  =  new emp('Abhishek', 31);
var y  =  new emp('Manmeet', 31);

emp.prototype.test = 'hello';

console.log(x.test);
console.log(y.test);




