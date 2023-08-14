let num = Math.floor(Math.random() * 10) + 1;
console.log("元の値は" + num + "です。");
const functionTest = (num) => {
  return num ** 2;
}
// ↓↓↓↓↓↓　function ver　↓↓↓↓↓↓
// function functionTest(num) {
//   return num ** 2;
// }

console.log("2乗した値は" + functionTest(num) + "です。")
