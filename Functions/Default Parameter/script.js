function greet(name = "user")
{
  document.getElementById("demo").innerHTML = ("hello" + name);
}

greet();
greet("Jyoti");
