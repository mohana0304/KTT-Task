"use strict";

/*//undefined variable
function myfun(){
  x=10; // No error - creates a global variable x
}
myfun();
console.log(x);

//Duplicate Parameter Names
function sum(a, a, c) {  // No error
    return a + a + c;
}
console.log(sum(5, 10, 15));

//this Behavior in Functions
function showThis() {
    console.log(this);  // Outputs: Window (global object)
}
showThis();
let public = 10;   
let private = 20;   
let static = 30;
console.log(public);

 let m=10;
    let str='Welcome';
     let str1='Mohanapriya';
  let n=`hi ${str1}`;
    console.log(str);
   console.log(n);
    let a=10,b=300;
    console.log( `the result is ${a + b}` );

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
cars.pop();
console.log(cars);
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`);

let ok=confirm('Are you sure?');
alert(ok);
*/

let num="1243";
console.log(`${num} ${typeof num}`);
num=Number(num);
console.log(typeof num);
let con="Mohanapriya";
console.log(`${con} ${typeof con}`);
con=Number(con);
console.log(`${con} ${typeof con}`);
let st=9789;
console.log(`${st} ${typeof st}`);
st=String(st);
console.log(typeof st);
alert(Boolean("hello"));
alert(Boolean(0));
alert(Boolean(""));


console.log(10-3);
console.log(2**4);
console.log(5%2);


let s = "my" + "string";
alert(s);
alert( '1' + 2 ); 
alert( 2 + '1'+4+6 );//2146(2+1+4+'6' ) 76

a=(3+4,6+9,1+2)
console.log(a);
a=b=1;
console.log(`a ` + ++a);
console.log(b++);
x = 1 + (a *= 2);
console.log(x);

a =Number( prompt("First number?", 1));
b = Number(prompt("Second number?", 2));

alert(a + b); 

let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);
age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


let name = null;
let user = name ?? "Guest";

console.log(user); 

let i = 1;

while (i <= 3) {
  console.log(i);
  i++;
}
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

 let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}


function greet2(name) {
  return "Hello " + name;
}

console.log(greet2("mona"));

function ask(question,showOk,showCancel){
  if(confirm(question)) showOk();
  else showCancel();
}

function showOk(){
  alert("you agreed.");
}

function showCancel(){
  alert("you canceled the execution.");
}

ask("Do you agree?" ,showOk,showCancel);

a=10,b=0;
subtract(a,b);
function subtract(a,b){
  console.log(`subtraction of ${a} and ${b} is ${a-b} `)
}

let sum = function(a,b) {
  return a + b;
};

console.log(sum);
console.log(sum(a,b));

console.log(x); // undefined

var x = 10;
//Groups related logs together
console.group("User Info");

console.log("Name: John");
console.log("Age: 25");

console.groupEnd();
//Same as group, but collapsed by default
console.groupCollapsed("Hidden Group");

console.log("Hidden log");

console.groupEnd();

console.error('something wend wrong!');
console.warn('this is a warning');
console.info('this is info');
//Displays data in table format
let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

console.table(users);
//Measure execution time
console.time("Loop");

for (let i = 0; i < 5; i++) {}

console.timeEnd("Loop");
//Counts how many times called
console.count("Click");
console.count("Click");


function first() {
  second();
}

function second() {
  console.trace();//Shows function call stack
}
first();



//Logs error only if condition is false
console.assert(5 > 10, "5 is not greater than 10");

//Displays javascript object as a tree
console.dir(document);
//Shows XML/HTML structure
console.dirxml(document.body);

//Arrow function-->A shorter way to write function expressions( let add = (a, b) => a + b;)
let greet1=()=> console.log("Hello");
greet1();
debugger;
let square=x=>x*x;
console.log(`Square value of 4 `+square(4));
let div=(i,j)=>i/j;
console.log(div(50,3));


age=9;
let Welcome= (age<18) ? (names)=>alert('hello '+names):(names)=>alert('greeting '+names);
Welcome("john");

//multiline Arrow Function

let multiply=(i,j) =>{
  let result=i*j;
  console.log(result);
}
multiply(8,5);
a=100,b=90;
debugger;

let total=(...number)=>{
  let tot=0;
  for(let n of number)
    tot+=n;
  return tot;
}
console.log(total(4,89,3,9,80,11));


console.log(Math);

let a1="1";
let a2=0;
switch(+a1){
  case(a2+1):
  console.log("switch");
  break;
  default:
    console.log("default");
    break;
}
console.log(a2);
