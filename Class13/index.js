// Hoisting
// Use strict
// This keyword

// "use strict";
let firstName = "John";
let lastName = "Doe";


var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : () => {
        return this; 
    }
};

console.log(person.fullName());



// function name2(_params) {
//     let lastName = "Doe"
// }

// function name_() {

//      console.log(this);
// }


// // Arrow functions
// // ES6
// name_ = (_name, _email, _phone) => {
//     console.log('lasdhf')
//     console.log('lasdhf')
//     console.log('lasdhf')
//     console.log('lasdhf')
// }


// // ES5
// function name(_params) {
//     return 'John Doe';
// }

// // ES6
// name_ = email => email;



// name_();


// For next class follow this link
// oop: https://www.youtube.com/watch?v=vDJpGenyHaA&ab_channel=TraversyMedia

  
