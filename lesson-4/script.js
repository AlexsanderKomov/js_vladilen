setTimeout(() => {
  console.log("Start");
}, 1000);

setTimeout(() => {
  console.log("Start123");
}, 0);

console.log("Start 2");
console.log("Start 4");
console.log("Start 5");
console.log("Start 6");
console.log("Start 7");
console.log("Start 8");
console.log("Start 9");
console.log("Start 10");
console.log("Start 11");
console.log("Start 12");

function timeout2sec() {
  console.log("timeout2sec");
}
console.log("Start 3");

setTimeout(timeout2sec, 2000);
