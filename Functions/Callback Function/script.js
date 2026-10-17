function greet(name, callback)
{
  console.log("Hello" + name);
  callback();
}

function message() 
{
  console.log("Welcome to JavaScript!");
}

greet("Jyoti", message);
