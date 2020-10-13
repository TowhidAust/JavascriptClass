// sorting
// bubble sort, quick sort, merge sort

// Sort by alphabatically
let arrFruits = ["Banana", "Apple", "Orange", "Mango"]
arrFruits.sort();
console.log(arrFruits);
// REVERSE
arrFruits.reverse();
console.log(arrFruits);


// sort array with numbers
let shoppingCart = [100, 50, 10, 30, 500];
shoppingCart.sort(function (a, b) { return a - b });
console.log(shoppingCart);

// reverse
let shoppingCart2 = [300, 10000, 10, 5000, 600];
shoppingCart2.sort(function (a, b) { return b - a });
console.log(shoppingCart2);

// random sort
console.log("random",Math.random());
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return 0.5 - Math.random() });
console.log("points array",points);

// Object/JSON
// Array of object/ Object of array
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
  
cars.sort(function (a, b) { return a.year - b.year });
console.log(cars);

// Array iteration
// for each method
// var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(function (value) {
    console.log(value);
});

// function myFunction(value, index, array) {
//   txt = txt + value + "<br>";
// }


var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction1);

function myFunction1(value, index, array) {
    console.log("mapp===",value * 2);
}

// FILTER
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction2);

function myFunction2(value, index, array) {
    console.log("filter==",value > 18, value);
}

// reduce
var numbers_x = [45, 4, 9, 16, 25];
let sum = numbers_x.reduce(myFunction3);
function myFunction3(total, value) {
    return total + value;
}
console.log("total is", sum);


//Array every
var numbers_5 = [45, 4, 9, 16, 25];
var allOver18 = numbers_5.every(myFunction4);

function myFunction4(value, index, array) {

    // console.log("is greater than 8 test",value);
    console.log("is greater than 8 test",value > 18, value);
    // return value > 18;
}

// console.log("allover18",allOver18);

// INdexx of
var fruits__ = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits__.indexOf("Mango");
console.log("index of",a);


var fruitsA = ["Apple", "Orange", "Apple", "Mango"];
var b = fruitsA.lastIndexOf("Apple");
console.log("last index of", b);


var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log("index which is greater than 18", first);
