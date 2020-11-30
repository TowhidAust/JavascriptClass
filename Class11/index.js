// Examples
let patt = new RegExp("Hello World", "g");
let res = patt.constructor;
console.log('test RegExp=', res);

// Object
// constructor(){

// }


// compile
// Do a global search for "man" in a string, and replace it with "person". Then change the regular expression and replace either "man" or "woman" with "person", with the compile() method:
var str="Every man in the world! Every woman on earth!";
var patt1 = /man/g;

console.log("search man",patt1);
var str2 = str.replace(patt1, "person");
console.log('replace by person==',str2);



// document.write(str2+"<br>");
patt1=/(wo)?man/g;
patt1.compile(patt1);
console.log(patt1); 

str2=str.replace(patt,"person");
// document.write(str2);

console.log('correct with person==', str2);


// exec()
// The exec() method returns the matched text if it finds a match, otherwise it returns null
// var str1 = "The best things in life are free";
// var patt = new RegExp("e");
// var res = patt.exec(str);



// ? MUST FOLLOW THIS LINK EXAMPLES (HOMEWORK) ==>
// https://www.w3schools.com/jsref/jsref_regexp_exec.asp

