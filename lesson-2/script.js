function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Sasha",
  age: 29,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const vika = {
  name: "Vika",
  age: 25,
};

// person.logInfo.bind(vika, "Frontend", "8-999-999-99-99")();
// person.logInfo.call(vika, "Frontend", "8-999-999-99-99");
person.logInfo.apply(vika, ["Frontend", "8-999-999-99-99"]);

/// ====================

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(2));

// console.log(multBy(array, 3));
