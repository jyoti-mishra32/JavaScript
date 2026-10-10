let student = {
    name: "Rahul",
    age: 21,

    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

student.greet();
