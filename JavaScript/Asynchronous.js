//js is single threaded -> it does one task at a time 
// but some task take time like loading data from server,API ,Readind files
//for that asynchronous programming is used

//callback

//function passed as a argument 

function fetchData(callback){
    console.log("Fetching.....");
    setTimeout(()=>{
        callback("Data received");
    },2000);
}
fetchData(function(data){
    console.log(data);
});//when callbacks are nested hard to read ,debug

//solution for callbck problem is promise
//promise to give you the result later.

/*promise states -->pending -waiting
                 -->fulfilled-success
                 -->rejected-failure
*/


function orderFood(isRestaurantOpen){
    return new Promise(function(resolve,reject){
        console.log("Order placed...");
        setTimeout(()=>{
            if(isRestaurantOpen){
                resolve("Food is ready");
            }else{
                reject("Restaurant is cosed");
            }
        },2000);
    })
}
orderFood(false).then(function(result){
    console.log("Success:",result);
}).catch(function(err){
    console.log("Error:",err);
}).finally(function(){
    console.log("Process finished");
});


function orderFood() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Order placed"), 1000);
  });
}

function cookFood(prev) {
  return new Promise(resolve => {
    setTimeout(() => resolve(prev + " → Food cooked"),1000);
  });
}

function deliverFood(prev) {
  return new Promise(resolve => {
    setTimeout(() => resolve(prev + " → Delivered"), 1000);
  });
}

orderFood()
  .then(result=>cookFood(result))
  .then(result=>deliverFood(result))
  .then(result=>console.log(result))
  .catch(err=>console.log(err));


function getData(){
    return new Promise((resolve,reject)=>{
        reject("server error");
    });
}

getData().catch(err=>console.log(err));

//Promises to handle tasks that take time in a clean and easy way

Promise.resolve("start")
.then(result=>{
    console.log(result);
    throw new Error("Something went wrong");
})
.catch((err)=>{
    console.log("Error:",err);
})


let p1 = Promise.resolve("A");
let p2 = Promise.reject("B");
//if any promise rejects stop immediately and show error.
Promise.all([p1, p2])//All must succeed
  .then(res => console.log(res))
  .catch(err => console.log("reject:",err));


p1=Promise.resolve("A");
p2=Promise.reject("Error");//wait for all(success+fail)
Promise.allSettled([p1,p2]).then(res=>console.log(res));

//show only first finished promise
p1 = new Promise(res => setTimeout(() => res("A"), 2000));
p2 = new Promise(res => setTimeout(() => res("B"), 1000));
Promise.race([p1, p2])
  .then(res => console.log(res));

//shows first success ingore the reject
p1 = Promise.reject("Error");
p2 = Promise.resolve("Success");
Promise.any([p1, p2])
  .then(res => console.log(res));



//promisfication is converting a callback function into promise function


//old callback function


/* fs.readfile("file.txt",(err,data)=>{
    if(err){
        console.log("Error");
    }else{
        console.log(data);
    }
});*/

const fs = require("fs");//this load file system module from Node.js

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("file.txt", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
readFilePromise()
  .then(data => console.log(data))
  .catch(err => console.log(err));



// Microtask is small task that run immediately after current code

// normal (synchronous code)
// Microtasks (very high priority)
// macrotasks(like setTimeout)

console.log("start");//normalcode

Promise.resolve().then(()=>{//microtask - runs after the normal codebut before timers
    console.log("Microtask");
});

console.log("End");//normalcode


setTimeout(()=> console.log("Timeout"),0);

Promise.resolve().then(()=>console.log("Microtask1"));


//queueMicrotask() these are used to create microtasks

/*microtask -- small ,hight-priority tasks
               run immediately after current code finishes
               promise.then(),.catch(),.finally(),queueMicrotask()
  macrotask -- normal/large tasks 
               run after microtasks are done
               setTimeout,setInterval,setImmediate(in Node.js),DOM events
*/


/*
code goes line by line into code stack
setTimeout sent to Web APIs timer starts
after timer finishes goes to Macrotask Queue
promise goes directly to Microtask Queue
Now Event Loop starts Working it check call stack is empty then it check Microtask Queue and excutes it
then it check macrotask Queue and excutes it


js finishes all sync code first
then run all microtasks
then run one macrotask
after macrotask -> again check microtasks 
to check all promise related work finishes immediately before moving on
*/

//without async/await
fetch("file.txt")
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

//with async/await
async function run() {
  try {
    const res = await fetch("file.txt");
    const data = await res.text();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

run();//


// async always return a promise 
// await wait until promise finishes(pause function) .only works inside async . uses microtask queue 
// then continue later using microtask queue

console.log("A");//1-->sync

async function test() {
  console.log("B");//2-->sync inside async
  await Promise.resolve();//3-->pause function
  console.log("C");//5-->run lates as microtask
}

test();

console.log("D");//4-->continues normal code



console.log("A1");

setTimeout(()=>console.log("B1"),0);

Promise.resolve().then(()=>{
    console.log("C1");
    setTimeout(()=>console.log("D1"),0);
});

console.log("E1");

async function app(){
    try{
        const res1=await fetch("");
        const login=await res1.json();
        console.log("Token:",login.token);

        const res2= await fetch("");
        const user=await res2.json();
        console.log("User:",user.name);
    }catch(err){
        console.log("Error:",err);
    }
}
app();//Login → wait,Get token,Fetch user → wait,Print user






