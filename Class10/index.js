// Normally search
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

console.log("search result=", n);


// regex 
// Use a regular expression to do a case-insensitive search for "w3schools" in a string:
var str_ = "Visit W3Schools!"; 
var n_ = str_.search(/w3Schools/i);
console.log('regex==', n_);


// string replace
var str1 = "Visit Microsoft!";
var res = str1.replace("Microsoft", "W3Schools");

// regex
var str2 = "Visit Microsoft!";
var res2 = str2.replace(/microsoft/i, "W3Schools");

console.log('replace regex=', res2);

// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping after the first match)	
// m	Perform multiline matching


// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |


//? METACHARACTERS
// \d	Find a digit	
// \s	Find a whitespace character	
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

// QUANTITITIES
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n


// TEST METHOD
var patt = /e/;
let resTest = patt.test("The best things in life are free!");
console.log("res test()",resTest);
// /e/.exec("The best things in life are free!");


// ** MUST KNOW IN THE NEXT CLASS
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp