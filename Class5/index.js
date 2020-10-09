// Number Methods


// toString()
let x = 123;
let stringFormat = x.toString();
console.log(stringFormat + 2);

// exponential()
let y = 9.656;
let ySquare = y.toExponential(2);
let yCube = y.toExponential(3);
console.log("square", ySquare);
console.log("cube", yCube);

// toFixed()
let z = 9.656;
let tofixedZero = z.toFixed(0); // 10
let toFixedTwo = z.toFixed(2); //9.66
let toFixedFour = z.toFixed(4); //9.6560

console.log(tofixedZero);
console.log(toFixedTwo);
console.log(toFixedFour);

// toPrecision()
let a = 9.656;
let toprec1 = a.toPrecision(); //9.656
let toprec2 = a.toPrecision(2); //9.7
let toprec3 = a.toPrecision(3); //9.66
let toprec4 = a.toPrecision(4); //9.656
console.log(toprec1);
console.log(toprec2);
console.log(toprec3);
console.log(toprec4);

// valueOf()
let b = 123;
let value1 =  b.valueOf(); // 123
let valu2 = (123).valueOf(); // 123


// Number()
let num1 = Number(true); // return 1;
let num2 = Number(false); // return 0;

let ten = Number("10");
let tenSpace = Number("10 12"); // NaN
console.log(num1);
console.log(num2);
console.log(ten);
console.log(tenSpace);

// ParseInt()
let int1 = parseInt("10.33");
console.log(int1);

// ParseFloat()
let f_int1 = parseFloat("10.555");
console.log(f_int1);

// MAX_VALUE
let c = Number.MAX_VALUE;
console.log(c);

// MIN_VALUE
let d = Number.MIN_VALUE;
console.log(d);


// -----------Array Methods-------------
let array1 = ["banana", "Orange", "Apple", "Mango"];
let toString = array1.toString();

// Join 
let join1 = array1.join("*"); //banana*orange*apple*mango
console.log(join1);


// Popping
let newPop1 = array1.pop();
let newPop2 = array1.pop();
console.log(newPop1,newPop2);
console.log(array1);

// push
array1.push("Mango");
array1.push("Apple");

console.log(array1);


// Shift()
let arrShift = ["banana1", "Orange1", "Apple1", "Mango1"];
arrShift.shift();

console.log('after shift==', arrShift);

// unshift();
arrShift.unshift("banana1");
console.log('after unshift==', arrShift);


// length
console.log(arrShift.length);

// delete()

delete arrShift[0];
console.log("deleted banana=", arrShift);

// splice()
let arrShift2 = ["bananaA", "OrangeA", "AppleA", "MangoA"];

arrShift2.splice(2, 0, "lemon", "juice");
console.log("splice", arrShift2);


// Merge

arrX = ['A', 'B'];
arrY = ['A', 'B', 'C'];

let merge = arrX.concat(arrY);
console.log(merge);


// slice
let fruits_1 = ["fruits1", "fruits2", "fruits3"];
let slicedArr = fruits_1.slice(2);

console.log("slice==", slicedArr);
