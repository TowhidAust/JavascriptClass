class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  addTwoNumber(num1,num2){
    // class method
    let result = num1 + num2;
    console.log("i am from submit button click summation", result);
  }

//   method2(){}

}

// function car(name, year) {
    
// }

class loginForm {

}



let myCar = new Car("Ford", 2014); // object of the class which is Car
let myCar2 = new Car().addTwoNumber(20,20);

debugger;
console.log('car name=',myCar);


let json = {
    name:'john',
    email: 'a@gmail.com',
    phone: '01011029'
}


// Task: https://www.w3schools.com/js/js_performance.asp 



