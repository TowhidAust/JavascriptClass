// JS DAtes
let date = new Date();
console.log("today is", date);

// 4 ways to declare a date object

/*
    1. new Date()
    2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
    3. new Date(milliseconds)
    4. new Date(date string)
 */


//1483228800000

let date2017 = new Date("2017");
console.log("date of 2017", date2017);

let dateFullParameters = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log("date with full parameters", dateFullParameters);


let dateMillisec = new Date(1483228800000);
console.log("date with milisec", dateMillisec);

// "October 13, 2014 11:13:00"
let dateString = new Date("October 13, 2014 11:13:00");
console.log("date string format", dateString);

// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

let dateObjectStartsFrom = new Date(0);
console.log("dateObjectStartsFrom==", dateObjectStartsFrom);

var dateObjectTest = new Date(100000000000);
console.log("milisec", dateObjectTest);

var dateObjectTest = new Date(-100000000000);
console.log("milisec minus===", dateObjectTest);

// UTC format
let utcFormat = new Date().toUTCString();
console.log("utc format", utcFormat);


// toDateString()
let toDateString = new Date().toDateString();
console.log("toDateString()", toDateString);

// toISOString()
let toISOString = new Date().toISOString();
console.log("toISOString()", toISOString);

// Memorize this
// ISO Date	"2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"


// ISO
let toISOStringConvert = new Date("2015-03-25");
console.log("toISOString()", toISOStringConvert);

// Parse
var msec = Date.parse("March 21, 2012");
console.log("date parse==", msec);


// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.


let getFullYear = new Date().getFullYear();
console.log("get full year==", getFullYear);



// SET to date object
// setMonth() 
// setDate()
// setHours()
// setMinutes()
// setSeconds()
let todayObj = new Date();
todayObj.setFullYear(2019);
console.log('set to date object check', todayObj);












