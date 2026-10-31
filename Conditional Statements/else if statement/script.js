let marks = 98;

if(marks >= 90){
document.getElementById("demo").innerHTML = "Grade A";
}
else if(marks >= 75){
document.getElementById("demo").innerHTML = "Grade B";
}
else if(marks >= 50){
  document.getElementById("demo").innerHTML = "Grade C";
}
else{
  document.getElementById("demo").innerHTML = "Fail";
}
