const person = new Object({
  name: "Sasha",
  age: 29,
  greet: function () {
    console.log("Greet!");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello!");
};

const vika = Object.create(person);
vika.name = "vika";

const str = new String("I am string");
