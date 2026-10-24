let button = document.getElementById("btn");

button.addEventListener("click", function(event) {
    console.log(event.type);
    console.log(event.target);
});
