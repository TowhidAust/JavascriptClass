// how to change html contents with javascript
// 1. document.getElementById
// 2. document.getElementsByClassName
// css # for id

document.getElementById("htmlHeaderTag").innerHTML = "This is javascript inner html";
console.log("Hello world");
// window.alert("Hello world");

document.write("this is document write");


// statement
// let const var

// declare multiple variable 
let a, b, c;

let x, y, z;
x = y + z; // statement


// let a;
// let b;
// let c;

//what function

// code blocks?

function myFunction() {
    // code block
    console.log("Hi this is myFunction Codeblock");
}

myFunction();
myFunction();
myFunction();
myFunction();


// let number1 = 10;
// let number2 = 20;

// create a function calculator
function calculator(number1, number2) {
    let result;
    result = number1 + number2;
    console.log("The added result is", result);
}

calculator(10, 20);

// Assignment 1
// Create a subtraction(biyog) calculator
// Multiplication (gun)
// division (vaag)


// Assignment 2
// Celcius to farrenheit calculator with a function



//=== DATA TYPES ====
let number1; // Interger number
let string = "My name is Towhid";
number1 = "Hi this is Alamin";

console.log(Boolean(30 > 20)); // true/false

// Object 
let object1 = {
    name: "alamin",
    age: 25,
    adress: "sarishabari",
    email: "alamin@gmail.com"
}

console.log("object====", object1);


// car = object
let car = {
    color: "white",
    carModel: "300hr",
    carNumberPlate:"3000000334jhasdkfj",
} 

console.log("car object==",car);
document.getElementById("color").innerHTML = car.color;
document.getElementById("model").innerHTML = car.carModel;
document.getElementById("numberplate").innerHTML = car.carNumberPlate;


// Javascript Event
// onClick, onChange, onMouseOver, onMouseOut, onload, onkeydown


function onchangeTest() {
    console.log("on change function triggered");
    let val = document.getElementById("inputOnchange").value;
    console.log("Input changed value is==>", val);
}


function onMouseOver() {
    document.getElementById("onMouseH3").innerHTML = "lekha changed"
    document.getElementById("onMouseH3").style.backgroundColor = "red";
}






