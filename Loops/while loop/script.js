let i = 1;
let text = "";

while (i <= 5) {
  text += "This number is: " + i + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = text;
