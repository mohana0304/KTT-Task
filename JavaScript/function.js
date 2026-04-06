



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
})();

//Generator function This function can pause and resume
function* generateNumbers() {
    console.log("yeild1");
    yield 1;//pause here and send this value{ value :1,done:false}
    console.log("yeild2");
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
