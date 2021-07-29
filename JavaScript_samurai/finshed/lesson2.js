// 1 誤り　constは再代入不可
const myNumber = 100;

myNumber = 200;
console.log(myNumber);

// 2 誤り  myNumberには数字を代入するべき
let myNumber = 'おはよう';

myNumber = 'こんにちは';
console.log(myNumber);

// 3 正しい
let myNumber = 100;

myNumber = 200;
console.log(myNumber);

// 4 誤り myNumberは、{}内のみで定義されているため
{ var myNumber = 100; }

console.log(myNumber);

// 5 正しい
{const myNumber = 100;}

const myNumber = 123;

console.log(myNumber);