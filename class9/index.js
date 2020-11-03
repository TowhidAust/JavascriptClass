typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"


console.log(typeof false);


// "John".constructor                // Returns function String()  {[native code]}
// (3.14).constructor                // Returns function Number()  {[native code]}
// false.constructor                 // Returns function Boolean() {[native code]}
// [1,2,3,4].constructor             // Returns function Array()   {[native code]}
// {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
// new Date().constructor            // Returns function Date()    {[native code]}
// function () {}.constructor        // Returns function Function(){[native code]}

console.log(false.constructor);


// function isArray(myArray) {
//     console.log(myArray.constructor.toString().indexOf("Array") > -1);
// }

// isArray(["Array123"]);


function isArray(myArray) {
  console.log(myArray.constructor === Array);
}
isArray(["Array"]);

function isDate(myDate) {
   console.log(myDate.constructor === Date);
}
isDate(new Date());


// convert to string
//  as like as toString()
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
// "123"


var y = "5";      // y is a string
var x = + y;      // x is a number
console.log(x);


// Automatic Type Conversion
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2



console.log(5 | 1);

// Must follow this link https://www.w3schools.com/js/js_bitwise.asp