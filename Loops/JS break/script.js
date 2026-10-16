let text = "";

for (let i = 1; i <= 10; i++) {

  if (i == 4) {
    break;
  }

  text += "Number: " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
