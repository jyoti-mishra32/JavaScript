let x = 15;
let y = 4;

let add = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;
let mod = x % y;
let exp = x ** y;

document.getElementById("demo").innerHTML = 
"x = " + x + "<br>" +
"y = " + y + "<br>" +
"x + y = " + add + "<br>" +
"x - y = " + sub + "<br>" +
"x * y = " + mul + "<br>" +
"x / y = " + div + "<br>" +
"x % y = " + mod + "<br>" +
"x ** y = " + exp;
