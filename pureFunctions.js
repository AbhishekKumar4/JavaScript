// Pure fucntions => when a function given a argument always returns the same results.
// In simpler words  => If same arguments is supplied multiple times, it returns the same result.

function myFunction(number) {
    return number * Math.random();
}

// Above is not a pure funtion as even if same argument is supplied, the result is changed.


//Example of pure function
function pureFunction(number) {
    return number * 2;
}

/**
 * In pure functions we should not use :
 * 1) Random values
 * 2) No current date/time
 * 3) No global state(DOM, files, DB, etc)
 * 4) No mutation of parameters
 */