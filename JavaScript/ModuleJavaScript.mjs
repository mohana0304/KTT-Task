
//undefined variable
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
/*showThis();
let public = 10;   
let private = 20;   
let static = 30;
console.log(public);*/
