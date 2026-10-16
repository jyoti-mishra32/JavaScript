let student = {
  name: "Jyoti",
  age: 22,
  course: "B.Tech"
};

let text = "";

for (let key in student) {
  text += key + " : " +
student[key] + "<br>";
}

document.getElementById("demo").innerHTML = text;
