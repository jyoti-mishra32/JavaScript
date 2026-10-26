let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submitted without page reload");

});
