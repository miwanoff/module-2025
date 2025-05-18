import {User, Student} from "./user.js";
import {hello} from "./hello.js";

let user = new User("John");
console.log(user.name);

let student = new Student("Joan", "KhPI");
console.log(student.name, student.university);

hello(student.name)