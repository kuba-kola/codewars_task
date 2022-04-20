// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero() {return arguments.length === 0 ? 0 : arguments[0](0); }
function one() {return arguments.length === 0 ? 1 : arguments[0](1); }
function two() {return arguments.length === 0 ? 2 : arguments[0](2); }
function three() {return arguments.length === 0 ? 3 : arguments[0](3);}
function four() {return arguments.length === 0 ? 4 : arguments[0](4);}
function five() {return arguments.length === 0 ? 5 : arguments[0](5);}
function six() {return arguments.length === 0 ? 6 : arguments[0](6);}
function seven() {return arguments.length === 0 ? 7 : arguments[0](7);}
function eight() {return arguments.length === 0 ? 8 : arguments[0](8);}
function nine() {return arguments.length === 0 ? 9 : arguments[0](9);}

function plus() {
    const n = arguments[0];
    return x => x + n;
}

function minus() { 
    const n = arguments[0];
    return x => x - n;
}

function times() {
    const n = arguments[0];
    return x => x * n;
}

function dividedBy() {
    const n = arguments[0];
    return x => Math.floor(x / n);
}

function zero() {return arguments.length === 0 ? 0 : arguments[0](0); }
function one() {return arguments.length === 0 ? 1 : arguments[0](1); }
function two() {return arguments.length === 0 ? 2 : arguments[0](2); }
function three() {return arguments.length === 0 ? 3 : arguments[0](3);}
function four() {return arguments.length === 0 ? 4 : arguments[0](4);}
function five() {return arguments.length === 0 ? 5 : arguments[0](5);}
function six() {return arguments.length === 0 ? 6 : arguments[0](6);}
function seven() {return arguments.length === 0 ? 7 : arguments[0](7);}
function eight() {return arguments.length === 0 ? 8 : arguments[0](8);}
function nine() {return arguments.length === 0 ? 9 : arguments[0](9);}

function plus() {
    const n = arguments[0];
    return x => x + n;
}

function minus() { 
    const n = arguments[0];
    return x => x - n;
}

function times() {
    const n = arguments[0];
    return x => x * n;
}

function dividedBy() {
    const n = arguments[0];
    return x => Math.floor(x / n);
}