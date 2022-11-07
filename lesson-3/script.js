// let name = 'Sasha';

// function closereGreetings() {
//   console.log(name);
// }

// closereGreetings();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTwo = createIncrementor(40);

// console.log(addOne(10));
// console.log(addTwo(15));

// function urlGenerate(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerate("com");

// console.log(comUrl("google"));

/*
Написать свою функцию bind
Пример работы:

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Sasha', age: 29, job: 'Frontend'}
const person2 = { name: 'Vika', age: 25, job: 'SMM'}

bind(person1, logPerson)
bind(person2, logPerson)
*/

function bind(context, fn) {
  return function (...agrs) {
    fn.apply(context, agrs);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Sasha", age: 29, job: "Frontend" };
const person2 = { name: "Vika", age: 25, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();
