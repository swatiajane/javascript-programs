var n1 = 0;

var n2 = 0;

var result = n1 / n2;

console.log(result);

console.log("===================");

var n3 = 10;

var n4;

console.log(n3 - n4);

console.log(`========= Uses cases of + operator =========`);

console.log(`1. Addition ${4 + 5}`);

var s1 = "Hello";

var s2 = " Good Morning";

console.log(`2. Concatenation ${s1 + s2}`);

console.log(`3. Conversion`);

var n5 = "50";

console.log(`type of n5: ${typeof n5}`);

var result = +n5;

console.log(`type of result: ${typeof result}`);

var n6;

console.log(`type of n6: ${typeof n6}`);

var result = +n6;

console.log(`type of result: ${result}, ${typeof result}`);

var n7 = "Jenny";

console.log(`type of n6: ${typeof n7}`);

var result = +n7;

console.log(`type of result: ${result}, ${typeof result}`);

console.log(`========= Implicit Conversion ==============`);
console.log("5" + 2);
console.log(10 + true);
console.log(10 + false);

console.log(`========= Explicit Conversion ==============`);

console.log(`====== String to Number  =======`);

var n1 = "10";

var result = +n1;

console.log(`n1 value ${n1} and it's type is ${typeof n1}`);

console.log(`result value ${result} and it's type is ${typeof result}`);

var result = Number(n1);

console.log();

console.log(`n1 value ${n1} and it's type is ${typeof n1}`);

console.log(`result value ${result} and it's type is ${typeof result}`);

console.log(`====== Number to String  =======`);

var n2 = 20;

var result = n2.toString();

console.log(`n2 value ${n2} and it's type is ${typeof n2}`);

console.log(`result value ${result} and it's type is ${typeof result}`);

var result = String(n2);

console.log(`n2 value ${n2} and it's type is ${typeof n2}`);

console.log(`result value ${result} and it's type is ${typeof result}`);
