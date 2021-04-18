// class ClassName {
//     constructor() { ... }
//     method_1() { ... }
//     method_2() { ... }
//     method_3() { ... }
//     method_MyMethod() { ... }
// }



/*
console.log("test");
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    calculator(){
        let a = 10;
        let b = 20;
        return a+b;
    }

    ageOfAlamin(){
        let today = new Date();
        // let birth = 1995;
        return today.getFullYear() - this.year;
    }


    methodWithParameter(){
        
    }
    
}



// car age
let myCar = new Car("Ford", 2014);
let age =  myCar.age();



// ALamins age
let alaminObject = new Car("Alamin", 1995);
let alsAge = alaminObject.ageOfAlamin();

console.log('alamins age', alsAge);



*/






// // calculator using a method
// let calc = new Car().calculator();

// console.log('the car age is', age);
// console.log('calculator', calc);





class MyClass2{

    nameAndYear(name, year) {
        this.name = name;
        this.year = year;

        let age = this.age();

        return age;

        // console.log("test name",this.name);
        // console.log("test year",this.year);
    }

    age() {
        console.log('test name',this.name);
        console.log('test year',this.year);

        let date = new Date();
        return date.getFullYear() - this.year;
    }

}


let age = new MyClass2().nameAndYear('BMW', 2014);
console.log('age of car',age)
// let testAgeMethod = new MyClass2().age();







// CALL BACK
function myDisplayer(some) {
    let b1 = 50;
    let divide = b1/some;

    console.log('divided result', divide);
}


function testCallback(){
    console.log("test callback");
    // ...
}





// MAIN  
function myCalculator(num1, num2, myCallback, calback2) {
    let sum = num1 + num2;

    // funciton1 ... 
    // funciton2 ... 
    // funciton3 ... 



    myCallback(sum);
    calback2();
}


// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
// }
  
myCalculator(5, 5, myDisplayer, testCallback);



