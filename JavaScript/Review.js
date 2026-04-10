//exec() -->  Execute the regex search on a string


regex=/^\d/;
// \d --> at aleast one digit anywhere
// ^\d --> start with digit
// \d$ -->end with digit
// ^\d+$ -->it all digits

let a="64tspk";
let b="tspk64";

console.log(regex.test(a)); //test is method if the pattern match anywhere
console.log(regex.test(b));

!isNaN(a.charAt(0)) ? console.log("hello") : console.log("hi");
!isNaN(b.charAt(0)) ? console.log("hello") : console.log("hi");

a.match(/^\d/)? console.log("hello") : console.log("hi");
b.match(/^\d/)? console.log("hello") : console.log("hi");

Number(a.charAt(0))? console.log("hello") : console.log("hi");
Number(b.charAt(0))? console.log("hello") : console.log("hi");

console.log(a.search(/^\d/) !== -1);
console.log(b.search(/^\d/) !== -1);

num="234.4578";

console.log(Math.floor(num *10)/10);

console.log(parseFloat(num.substring(0,num.indexOf('.')+2)));

console.log(parseFloat(num.match(/^\d+\.\d{1}/)));

regex=/^\d+\.\d{1}/;
console.log(regex.exec(num));

console.log(Number(regex.exec(num)));