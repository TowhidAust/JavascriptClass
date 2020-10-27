// MATH object
console.log("PI==", Math.PI);

console.log("round ==", Math.round(4.7));
console.log("power==", Math.pow(4, 2));
console.log("square root==", Math.sqrt(5));
console.log("Absolute value==", Math.abs(-60));
console.log("Ceil==", Math.ceil(4.4));
console.log("Floor==", Math.floor(4.4));
console.log("sin theta==", Math.sin(90));
// Math.cos()

// Math.min() and Math.max()
console.log("Min==", Math.min(0, 150, 30, 20, -8, -200));
// Math.random()


// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)



// MATH RANDOM
console.log("Random 0-9", Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10) + 1);  // returns a random integer from 1 to 10

// let min = 10;
// let max = 20;
function getRndInteger(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min);
}

getRndInteger(10,20);


for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log("The number is " + i);
}