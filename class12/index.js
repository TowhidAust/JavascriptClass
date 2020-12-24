try {
    habijabi("Welcome guest!");

} catch (err) {
    console.log(err.message);
}



let globalscopeNum = 30;
function add() {
    let numbr1 = 20;
    let numbr2 = 25;

    let res = numbr1 + numbr2 + globalscopeNum;
}

// let res2 = globalscopeNum + numbr1 + numbr2; 