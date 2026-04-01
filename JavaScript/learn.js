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
console.log(public);*/

/* let m=10;
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
let x = 1 + (a *= 2);
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


function greet(name) {
  return "Hello " + name;
}

console.log(greet("mona"));

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

/*console.error('something wend wrong!');
console.warn('this is a warning');
console.info('this is info');*/
//Displays data in table format
/*let users = [
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
let greet=()=> console.log("Hello");
greet();
debugger;
let square=x=>x*x;
console.log(`Square value of 4 `+square(4));
let div=(i,j)=>i/j;
console.log(div(50,3));


let age=9;
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
*/



//Immediately Invoked Function Expression (IIFE)is a JavaScript function 
// that runs immediately as soon as it is defined. You don't need to call it separately.

(function() {
    console.log("Runs immediately");
})();

(function(name){
  console.log("Hello "+name);
})("mona");

(()=>{
  console.log("Arrow IIFE")
})

//Generator function This function can pause and resume
function* generateNumbers() {

    yield 1;//pause here and send this value{ value :1,done:false}
    yield 2;//done:flase more values coming, done:true generator finished
    yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value);//next() for resume from pause
console.log(gen.next().value); 
console.log(gen.next().value);

//Async function --> this function always return promise
//await pauses the async function until the Promise resolves
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function makeCoffee() {
    console.log("Starting coffee machine...");
    await delay(2000);  // Wait 2 seconds
    console.log("Coffee is ready!");
}
makeCoffee();
//Constructor function is a blueprint/template for creating multiple similar objects. 
// It's like a factory that produces objects with the same properties and methods.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);
console.log(person1.name);  
console.log(person2.name);  

//method definition in objects
const person = {
    name: "John",
    greet:()=>{  
        console.log(`Hello, I'm ${this.name}`);
    }
};
person.greet();

//recusive function
function fact(n){
  if(n===0||n===1)
    return 1;
  return n*fact(n-1);
}
console.log(fact(6));

//call back function
function dosomething(callback){
  console.log('doing work..');
  callback();
}
function mycallback(){
  console.log("callback executed!");
}
dosomething(mycallback);




function logger(func){
    return function(...args){
        console.log("This time is mine");
        return func(...args);
    }
}
function add(a,b){
    return a+b;
}
const loggerevent = logger(add);
console.log(loggerevent(2,3));


let student={
  
  name:"Anu",
  "full name":"Anu Varsha",
  age:20,
  marks:85,
  greet: function() {
    console.log("Hello " + this.name);
  },
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
console.log(student.name);

student.year=2022;
student.course="BBA";

console.log(student.year);
console.log(student.course);

delete student.course;
console.log(student.course);

console.log(student.address.city);

console.log(student["full name"]);
for(let key in student){
  console.log(key,student[key]);
}

let stud=student;
stud.age=24;
console.log(student.age);

let copy={...student};
copy.name="Ammu";
copy.address.city="erode";
console.log(student.name);
console.log(student.address.city);
let user={
  nickname:"Ammu",
  age:21
}
let key="nickname";
console.log(user.key)//undefined
console.log(user[key]);

let fruit="apple";
let shop={
    [fruit]:5
};
console.log(shop.apple);

//shorthand property
let idno=1;
let month="march";
let users={
    idno,
    month
};
console.log(users);
console.log("idno" in users);
let cart={
  items:[//Array of objects
    { name: "shirt",price:600},
    { name:"Shoes",price:1400},
    { name:"saree",price:2489} 
  ],
  total:function(){//function in object
    let sum = 0;
    for(let item of this.items){
      sum += item.price;
    }
    return sum;
  }
};
console.log(cart.total());

let user1 = { name: "John" };
let clone=Object.assign(user1,{location:"erode"},{phone:9987868677});

let clone1=Object.assign({},user1);
clone1.name="mona";
console.log(clone);
console.log(clone1);
let us={
  name:"mona",
  sizes:{
    height:182,
    width:50
  }
};
let clone3=structuredClone(us);
console.log(clone3.sizes === us.sizes);
us.sizes.width=60;
console.log(clone3.sizes.width);

console.log(JSON.stringify(users));//convert object -->JSON string


function construct(name){
  this.name=name;
  this.active=true;
}
let u1=new construct("Deena");
let u2=new construct("mona");
console.log(u1);
console.log(u2);



let user3={};
//console.log(user3.address.city) this cause error for that optional chaining ?. is used
console.log(user3 ?. address ?. city);

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);  
console.log(typeof sym1);     
const sym3 = Symbol("id");
const sym4 = Symbol("id");
console.log(sym3 === sym4);  
console.log(sym3.toString()); 
console.log(sym3.description);

//check a global registry id symbol exists reuse it if not create new
let s1=Symbol.for("userID");
let s2=Symbol.for("userID");
console.log(s1===s2);

console.log(Symbol.keyFor(s1));//value inthe key
console.log(Symbol.keyFor(sym4));//undefined this work in only (symbol.for) key



let product={
  name:"laptop",
  price:80000,
  [Symbol.toPrimitive](hint){
    console.log("Symbol.toPrimitive called with hint:", hint);
    if(hint==="number"){
      return this.price;
    }
    if(hint==="string"){
      return this.name;
    }
    return this.price;//default value
  },

  valueOf(){
    console.log("valueOf called");
    return this.price;
  },
  toString(){
    console.log("toString called");
    return this.name;
  }
};
console.log(product+1000);//default 
console.log(Number(product));//hint "number"
console.log(String(product));
console.log(product);



//number methods
let num=12.897;

console.log(num.toFixed(1));
console.log(num.toString());

console.log(num.toPrecision(3));//12.8
console.log(Number.isInteger(num));//10 -->true   10.5 -->false

//Math.round,floor,ceil,max,min,pow,sqrt,random(0 to 1),cqrt

let billion=1_00_000_000;//or 1e8  _ as separator js engine simply ignores 
console.log(billion);
console.log(1e8);
let mcs=0.000001;//1e-6
console.log(mcs);
console.log(1e-6);
console.log(0xff)//0xFF same case doesnt matter

let a=0b101;//binary form of 5
let b=0o5;//octal form of 5
console.log(a==b);

num=255;
console.log(num.toString(16))//num.tostring(base) hexadecimal
console.log(num.toString(2))//decimal

console.log(isNaN(107));//("107") same answer because this also a number
console.log(isNaN("abc"));//Number.isNaN() 
//finite number (not Infinity, not -Infinity, not NaN)
console.log(isFinite("100"));
console.log(isFinite("abc"));//Number.isFinite()
console.log(isFinite(null));
//isNaN(), isFinite() both converts values first but number.isfinite or nan is not converted

console.log(Object.is(0,-0))// this is same as  === but it check value,type and also sign
console.log(Object.is(NaN,NaN))

/*

//Parse convert data from one format to another

console.log(parseInt("100")) //100
parseInt("100px") //100
parseInt("abc") //NaN

console.log(parseFloat("10.5"))//10.5

console.log(parseInt("100px")); // 100
console.log(Number("100px"));   // NaN
//Number() is stricter than parseInt

console.log(parseInt("101", 2));//2 represent binary (base)
*/

let str='{"name":"kala","age":20}';
let obj=JSON.parse(str);
console.log(obj.name); // Converts JSON string → JavaScript object

//String are immutable,collection of character
//JavaScript temporarily converts primitive → object (autoboxing)

str="Hello Mona";
let str1="  hello  ";
console.log(str[0]);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.includes("ll"));
console.log(str.indexOf("M"));
console.log(str.slice(1,5))
console.log(str.slice(-4));
console.log(str.substring(0,7));//slice support negative value substring not
console.log(str.replace("Hello","Hi"))
console.log(str1.trim());
console.log(str.split(" "));
console.log(str.startsWith("He"))
console.log(str.endsWith("na"));
console.log(str.search("o"));//return first occurring index
console.log(str.charAt(1));
console.log(str.charCodeAt(1))//ASCII value of 1 index char
console.log(str.codePointAt(0))//same as charCodeAt()
console.log(String.fromCodePoint(90))//Z
console.log(str.at(-1))//return lastchar 
console.log(str.replaceAll("o","*"))
console.log("hi ".repeat(3))
console.log(str.padStart(20,"*"));
console.log(str.padEnd(20,"*"))
console.log(str.localeCompare(str1))//first >second -->1  ,equal -->0 first<second -->-1
console.log("hello129mona34".match(/\d+/));
console.log([..."hello129mona34".matchAll(/\d+/g)]);
console.log(str.replace("o","&"))
console.log(`hello\nworld`);
console.log(String.raw`hello\nworld`)//ignore escape characters


//Array multiple values in single variable
//js array are dynamic we can change size anytime and mix data type
let color=["red","blue","green"];
console.log(color[0]);
color.push("pink")//add at end
color.unshift("orange")//add at beginning
color.pop();//remove last
color.shift();//remove first
color.push("red");
console.log(color.indexOf("red"));
console.log(color.lastIndexOf("red"));

let col=color.with(1,"orange");
console.log(col)
console.log(color);

for(let i of color){
  console.log(i);
}
color.forEach((item,index)=>console.log(item,index));

let arr=[1,2,3,4];

let double =arr.map(n=>n*2);//map is to modify every element in arr
console.log(double)
let even=arr.filter(n=>n%2 === 0);//filter select element based on condition
console.log(even)
console.log(color.includes("red"));
console.log(arr.length);
let mixed = [1, "hello", true, null];
console.log(mixed)

let res=arr.find(n=>n>3);
console.log(res);
console.log(arr.some(n=>n>3))//return true if at least one element matches

console.log(double.every(n=>n%2===0))//return true if all elements match
console.log(arr.concat(double));//Merge Arrays
console.log(arr.slice(1,3));//copy part of array

arr.splice(0,2);//remove 2 element from index 0
console.log(arr);
console.log(arr.at(-1));

let arr1=[9,6,0,1,33,8,18];
console.log(arr1.toSorted())//console.log(arr1.sort());
console.log(arr1.toReversed())//console.log(arr1.reverse())
//sort and reverse change the original array but tosorted,
// toReversed not change the original

//reduce array to a single value liike total,count items,flat the array etc..
let sum=arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

let arr2 = [[1, 2], [3, 4], [5]];
let flat = arr2.reduce((a,c)=>a.concat(c),[]);
console.log(flat);

let arr3=['anu','varsha','arun','mega'];
console.log(arr3.join(';'));
console.log(isNaN("101"));

for(let key in user){
  console.log(key,user[key]);
}

for(let a of arr3){
  console.log(a);
}

let iterator=arr1[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//Map(set,get,has,size,delet)
let mymap=new Map();
mymap.set("name","mona");
mymap.set(1,101);
mymap.set(true,"boolean value");
mymap.set({id:1},"object key");

cons