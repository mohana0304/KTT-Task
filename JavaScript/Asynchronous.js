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


p1 = Promise.reject("Error");
p2 = Promise.resolve("Success");
Promise.any([p1, p2])
  .then(res => console.log(res));