//Number
let age = 22;
//String
let name = "Jyoti";
//Boolean
let isStudent = true;
//Undefined
let city;
//Null
let phone = null;
//BigInt
let bigNumber = 12345678901234567890n;
//Symbol
let id = Symbol("id");

document.getElementById("demo").innerHTML =
"Number: " + age + " (" + typeof age + ")" + "<br>" +
"String: " + name + " (" + typeof name + ")" +"<br>" +
"Boolean: " + isStudent + " (" + typeof isStudent + ")" +"<br>" +
"Undefined: " + city + " (" + typeof city + ")" +"<br>" +
"Null: " + phone + " (" + typeof phone + ")" +"<br>" +
"BigInt: " + bigNumber + " (" + typeof bigNumber + ")" +"<br>" +
"Symbol: " + id.toString() + " (" + typeof id + ")";
