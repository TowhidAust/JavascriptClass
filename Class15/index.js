function myFunction(){
    let getInput = document.getElementById('inputNumber').value;
    let display = document.getElementById('display');
    console.log(getInput);

    if (isNaN(getInput) || getInput < 1 || getInput > 10) {
        console.log('number is not ok');
        display.innerHTML = "Number is not ok"
        display.style.backgroundColor = 'red';


    } else {
        console.log('Number is ok');
        display.innerHTML = "Number is ok"
    }
}
