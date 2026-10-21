function outerFunction() {

  function innerFunction() {
    console.log("This is the inner function");
  }
  innerFunction();
}

outerFunction();
