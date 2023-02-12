// const { add, minus, multiply, divide, mode } = require("./modules");

// console.log("Hello World");
// add(8, 9);
// minus(4, 2);
// multiply(3, 4);
// divide(9, 3);
// mode(4, 1);

const person = require("./producer");

console.log(person.getName());
person.setName("Tim");
console.log(person.getName());

const people = require("./producer");
console.log(people.getName());

const person1 = {
  name: "Doe",
};

// const person2 = person1;
// person2.name = "Smith";

let person2;

person2 = {
  name: "Harry",
};

console.log(person1);
