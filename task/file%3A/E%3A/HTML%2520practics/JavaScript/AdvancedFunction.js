
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



function greet() {//functions are behave like objects
  console.log("Hello");
  console.log(greet.customProp);
}

greet.customProp = "I am a function property";

greet();

//Named Function Expression (NFE) is a function expression that has a name inside it.

const factorial=function fact(n){
    if(n==0||n==1) return 1;
    return n*fact(n-1);
}

//console.log(fact(5)); ReferenceError: fact is not defined
console.log(factorial(5));


//new Function is a constructor used to create a function from strings at runtime.

let div = new Function('a', 'b', 'return a / b');
console.log(div(10, 3)); 


globalThis.Z=10;
function test() {
  let Z = 20;

  let fn = new Function('console.log("it concept the global variable value first"); return Z');
  return fn();
}

console.log(test()); 


//scheduling 

//setTimeout run this function after x milliseconds
console.log("Start");
setTimeout(()=>{
    console.log("Hello after 2 second")
},2000);
console.log("End");

//setInterval run this function every x milliseconds

let id=setInterval(()=>{
    console.log("Repeating every 1 sec");
},1000);
setTimeout(()=>{
    clearInterval(id);
},3000);


function original(name){
    return `Hello ${name}`;
}

//we can add behaviour without change the original function
function decorator(fn){
    return function(name){
        console.log("Before call");
        const res=fn(name);
        console.log(res);
        console.log("After call");
    };
}
const call=decorator(original);
call("mona");


//forwarding, call/apply

function orgin(name){
    return `Hello ${name}`;
}
function decorate(fn){
    return function(...args){//passing all arguments + this correctly to original function
        console.log("Before");
        const res=fn.apply(this,args);//call/apply are function with a specific this
        console.log("After");
        return res;
    };
}
const called=decorate(orgin);
console.log(called("priya",24));


let shop={
    taxRate:0.18,
    getPrice(basePrice,discount){
        console.log("calculating....");
        return (basePrice - discount)*(1+this.taxRate);
    }
};

function cachingDecorator(func){
    let cache=new Map();// to store results in map
    return function(){
        let key = [].join.call(arguments);//convert inputs into single strings key
        if(cache.has(key)){
            return cache.get(key);             
        }
        let result =func.apply(this,arguments);//this call original function with same input arguments
        cache.set(key,result);
        return result;
    };
}

shop.getPrice = cachingDecorator(shop.getPrice);

console.log(shop.getPrice(2, 4));
console.log(shop.getPrice(2, 4));


//func(2,6); it calculated func(2,6) it calculated again to reduce that use map 
// to store the calculate value if the input is already present without calculating it return the output


//if funct(2,3) ---> arguments ={0:2,1:3,length:2}
//call/apply are to control pass arguments  and forward a function call safely
