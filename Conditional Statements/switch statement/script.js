let userRole = "admin";

switch(userRole)
{
  case "admin":
    document.getElementById("demo").innerHTML = "Full Access Granted";
    break;
  case "editor":
    document.getElementById("demo").innerHTML =
    "Editor Access Granted";
    break;
  case "author":
    document.getElementById("demo").innerHTML =
    "Author Access Granted";
    break;
  case "student":
    document.getElementById("demo").innerHTML =
    "Student Access Granted";
    break;
  default:
    document.getElementById("demo").innerHTML =
    "Access Denied";

}
