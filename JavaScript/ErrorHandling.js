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
}
console.log("Thank You!!");



/*
function ValidationError(message) {
  let err = new Error(message);
  err.name = "ValidationError";

  Object.setPrototypeOf(err, ValidationError.prototype);

  return err;
}
ValidationError.prototype = Object.create(Error.prototype);



function PropertyRequiredError(property) {
  let err = ValidationError("Missing property: " + property);
  
  err.name = "PropertyRequiredError";
  err.property = property;

  Object.setPrototypeOf(err, PropertyRequiredError.prototype);

  return err;
}
PropertyRequiredError.prototype = Object.create(ValidationError.prototype);


function ReadError(message, cause) {
  let err = new Error(message);

  err.name = "ReadError";
  err.cause = cause;

  Object.setPrototypeOf(err, ReadError.prototype);

  return err;
}
ReadError.prototype = Object.create(Error.prototype);


function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (e) {
    throw ReadError("JSON Error", e);
  }


  try {
    if (!user.name) {
      throw PropertyRequiredError("name");
    }
    if (!user.age) {
      throw PropertyRequiredError("age");
    }
  } catch (e) {
    throw ReadError("Validation Error", e);
  }

  return user;
}



try {
  readUser('{ "age": 25 }'); 
} catch (e) {

  if (e instanceof ReadError) {
    console.log("Main Error:", e.message);
    console.log("Original Error:", e.cause.message);

  } else {
    console.log("Unknown Error:", e.message);
  }

}*/



