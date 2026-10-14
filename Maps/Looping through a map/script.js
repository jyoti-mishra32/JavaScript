let student = new Map();

student.set("name", "Rahul");
student.set("age", 21);
student.set("course", "B.Tech");

for (let [key, value] of student) {
    console.log(key, value);
}
