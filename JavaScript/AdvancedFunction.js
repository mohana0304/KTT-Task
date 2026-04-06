
//Recusion and stack 
//function that itself is recusion
function fib(n){
    if(n<=1) return n;
    return fib(n-1)+fib(n-2);
}

console.log(fib(5));

/*function infin(){
    infin();
}
console.log(infin());*/

// show RangeError: Maximum call stack size exceeded    


//Rest and spread parameters

//rest --> collects values into a cointainer (array)(packing)
//spread --> expands values out of a container(unpacking)

let array=[2,89,67,45,39,80];

function fn(...args){//rest
    return args.reduce((total,n)=>total+n,0);
}
console.log(fn(...array));//spread


//arguments is special array-like object named arguments 
// that contains all arguments by their index.
function show(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
show('mona',90);

let a1=[2,8,9],b1=[10,89,30];

//merge array using spread
console.log([...a1,...b1]);

let o1={a:1},o2={b:2};
//merge object using spread
console.log({...o1,...o2});

//spread
console.log(Math.min(...array));
const copyarr=[...array];
console.log(...copyarr);



//variable scope
let g=10;//global variable with global scope

function func(){
    let f=3;//function scope
    console.log("Function Scope "+f);
}

if(g%2==0){
    let m=8;//block scope
    console.log("Block Scope "+m);
}

func();
console.log("Global Scope "+g);


//Closure = Function + Remembered variables
//function carrying its past with it.

function countCreator(){
    let count=0;
    return function counter(){
        count++;
        return count;
    }
}

const count=countCreator();//return function so count is a function

console.log(typeof count);
console.log(count());
console.log(count());

//each closure is independent

const c1=countCreator();
const c2=countCreator();

//closure 1 count
console.log(c1());

//closure 2  count
console.log(c2());
console.log(c2());

function secret() {
  let data = "hidden";

  return {
    get() {
      return data;
    }
  };
}

const obj = secret();
console.log(typeof obj);
console.log(obj.get());

//old var

//var is function scope but not have block scope

function old(){
    var o=8;
    console.log("function scope "+o);
}
//console.log(o); o is not defined

if(10%2==0){
    var o=10;
    console.log("Block scope "+o);
}
console.log(o);

//global object provides variables and function 
//in browser it named as window , for node.js it is global


//window (UI + DOM)
//DOM relared objects like document.getElementById()
//dialog function like alert,confirm,prompt
//browser navigation & location like(window.location,history,navigator)
// these are not available in Node.js

// functions and variables declared with var (not let/const!)
//let and const do not become properties of the window object


//these are work only in broswe not in server

/*
var gvar=5;
//console.log(window.gvar); //5

let glet=10;
//console.log(window.glet); //undefined

console.log(globalThis.gvar);

console.log(globalThis.glet);

function greet5() {
  return "Hello!";
}

console.log(globalThis.greet5()); */

globalThis.x=19;
console.log(globalThis.x);

global.y = 10;

console.log(global.y);

function greet() {//functions are behave like objects
  console.log("Hello");
}

greet.customProp = "I am a function property";

greet();
console.log(greet.customProp);

//Named Function Expression (NFE) is a function expression that has a name inside it.

const factorial=function fact(n){
    if(n==0||n==1) return 1;
    return n*fact(n-1);
}

//console.log(fact(5)); ReferenceError: fact is not defined
console.log(factorial(5));