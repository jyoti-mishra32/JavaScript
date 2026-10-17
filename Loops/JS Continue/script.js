let text = "";

for (let i = 1; i <= 5; i++) {

  if (i == 3) {
    continue;
  }

  text += "Number: " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
