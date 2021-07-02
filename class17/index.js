// console.log('test');
function myDisplayer(value) {
    console.log("display something", value);
}
  
let myPromise = new Promise(function(myResolve, myReject) {


    let x = 0;
  
    // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }


});
  
  myPromise.then(
      function(value) {
          myDisplayer(value);
          let newX = 1;
          let newY = 2;
          console.log(newX+newY);
    },
    function(error) {
          myDisplayer(error);
    }
);






// --- async await
async function myFunction() {
    console.log("this is an async function");
    let p = 1;
    if(p==0){
        return 'resolved'
    }else{
        return 'not resolved'
    }
}

myFunction().then(function(value){
    console.log(value);
});


// AWAIT
async function myDisplayNew() {
    let myPromise = new Promise(function(myResolve, myReject) {
        console.log("this is promise");
        myResolve("I love You !!");
    });

    myPromise.then(function(value){
        console.log(value);
    })
    
    await myPromise;


    console.log("next line");
}

myDisplayNew();