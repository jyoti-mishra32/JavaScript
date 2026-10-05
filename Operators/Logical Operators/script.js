let a = 10;
let b = 20;

document.getElementById("demo").innerHTML =
"(a < b && a > b) = " + (a < b && a > 5) + "<br>" +
"(a > b || a < b) = " + (a > b || a < 5) + "<br>" +
"!(a < b) = " + !(a < b);
