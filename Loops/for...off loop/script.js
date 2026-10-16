let fruits = ["Apple", "Mango", "Banana"];

let text = "";

for(let fruit of fruits) {
  text += fruit + "<br>";
}

document.getElementById("demo").innerHTML = text;
