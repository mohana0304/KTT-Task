

//to Prevent program from crashing when an error happens

try{
    console.log(a);
}catch(err){
    console.log(err.message);
}

//error object err.message,err.name

try{
    JSON.parse("wrong");
}catch(err){
    console.log(err.name);//error name
    console.log(err.message);//textual message about error details
    console.log(err.stack);//information about the sequence of nested calls that led to the error.
}

function div(a,b){
    try{
        let num1=Number(a);
        let num2=Number(b);
        if(isNaN(num1)||isNaN(num2)){
            throw new Error("Both inputs must be numbers");
        }
        if(num2===0){
            throw new Error("cannot divide by zero");
        }
        let res=num1/num2;
        console.log(`Result : ${res}`);
        return res;
    }catch(err){
        console.log(`Error: ${err.message}`);
        return null;
    }finally{
        console.log("Division operation attempted");
    }
}

div(10,2);
div(10,0);
div("10",3);
div("abc",2);

//customize error
try{
    throw new Error("something went wrong");
}catch(e){
    console.log(e.name);
    console.log(e.message);
}

//try...catch work only for synchronous code 

/*try {
  setTimeout(() => {
    throw new Error("Error");
  }, 1000);
} catch (e) {
  console.log("Not caught");
}*/


//for asynchronous code --> Put try-catch INSIDE an async function


function validateAge(age){
    if(age<18){
        let err=new Error("Age must be 18+");
        err.name="AgeError";
        throw err;
    }
    return "valid";
}

try{
    validateAge(15);
}catch(e){
    console.log(e.name +' : '+ e.message);
}


function login(user) {
  if (!user) {
    let err = new Error("User not found");
    err.code = 404;
    throw err;
  }
  console.log("Welcome "+user);
}

try {
  login("");
} catch (e) {
  console.log(e.message);
  console.log(e.code); 
}

function withdraw(bal,amt){
    if(amt>bal){
        throw new Error("Insufficient balance");
    }
    return bal-amt;
}
try{
    let money=withdraw(1000,2000);
    console.log("Remaining:",money);
}catch(err){
    console.log("Transaction failed: ",err.message);
}console.log("Thank You!!");




/*Types error caught by try ...catch
       ReferenceError → using undefined variables
       TypeError → wrong data type usage
       RangeError → value out of range
       SyntaxError (only in eval or dynamic code)
       Custom errors (throw new Error())
       URIError → When encodeURI() or decodeURI() is used incorrectly.

*/


// ReferenceError
try {
  console.log(x); // x not defined
} catch (e) {
  console.log(e.name); 
}


// TypeError
try {
  let num = 10;
  num.toUpperCase(); // number has no toUpperCase()
} catch (e) {
  console.log(e.name); 
}

 // RangeError
try {
  let arr = new Array(-1); // invalid length
} catch (e) {
  console.log(e.name);
}


// URIError
try {
  decodeURI("%"); // invalid URI
} catch (e) {
  console.log(e.name); 
}


