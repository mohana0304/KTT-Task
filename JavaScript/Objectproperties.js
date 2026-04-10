//Property flags and descriptors

let users={
    name:"mona",
    age:20
};
let descriptor=Object.getOwnPropertyDescriptor(users,"name");
console.log(descriptor);




//writable -->can we change the value?
Object.defineProperty(users, "name", {
  writable: false
});

users.name = "John"; 
console.log(users.name); 


//enumerable -->willit show in loops?

Object.defineProperty(users, "name", {
  enumerable: false
});

for(let key in users){
    console.log(key);
}

//configurable -->can we delete or modify property?

Object.defineProperty(users, "name", {
  configurable: false ,enumerable:true
});

delete users.name;

for(let key in users){
    console.log(key);
}

/*
Object.defineProperty(users, "name", {
  value: "Priya",
  writable: false,
  enumerable: true,
  configurable: false
});

*/

for(let key in users){
    console.log(users[key]);
}

Object.defineProperty(users,"email",{
    value: "kmohana@gmail.com" 
});// if create property using defineproperty all flags writable,enumerable,configurable are false

//multiple properties
Object.defineProperties(users,{
    phone:{ value:"9087892387",enumerable:true},
    course:{value:"Bsc",enumerable:true}
});

for(let key in users){
    console.log(key,users[key]);
}

Object.preventExtensions(users); //prevent adding new properties
Object.freeze(users);//completely freeze
Object.seal(users);//prevent add/remove

console.log(Object.isFrozen(users));
console.log(Object.isSealed(users));
Object.isExtensible(users);

//properties setter and getter


ob={
    name:"John",
    surname:"Doe",
    get fullname(){
        return `${this.name} ${this.surname}`;
    }
};

console.log(ob.fullname);

person={
    name:"john",
    get getName(){
        return this.name;
    },
    set setName(newname){
        this.name=newname;
    }
};

person.setName="priya";

console.log(person.getName);

person.name="mona";

console.log(person.name);

user={
    _age:0,
    set age(val){
    if(val>=0){
    this._age=val;}
else{
    console.log("Invalid age");
}
},
get age(){
return this._age;
}
};

user.age=-5;

user.age=24;
console.log(user.age);


//prototype inheritance

//In js every object has a hidden property called [[Prototype]]
//It allows an object to inherit properties and methods from another object.
//__proto__ is a built-in accessor property available on all JavaScript objects.
const parent={
    greet(){
        console.log("Hello!");
    }
};
const child={};

console.log("child one using __proto__");
child.__proto__=parent;
child.greet();


//Inherit using Object.create
console.log("child two using Object.create");
 let child2=Object.create(parent);
 child2.greet();


//Only functions have a prototype property
//Objects do NOT have prototype, they have __proto__


//F prototype(function prototype)

function Person(name){
    this.name=name;
    /*
    this.sayHi=function(){
    console.log("Hi, I am "+this.name);
    };
    */ 
}

Person.prototype.sayHi=function(){
    console.log("Hi, I am "+this.name);
}

p1=new Person("john");

p2=new Person("mona");

p1.sayHi();
p2.sayHi();

// console.log(p1.sayHi() === p2.sayHi()); false when this.sayhi create copy for each object
console.log(p1.sayHi() === p2.sayHi());// but it share one memory and call the function 


//Native property in built properties provided by js

console.log(Object.getOwnPropertyNames(Array.prototype));//it contain all inbuilt Array methods

console.log(Object.getOwnPropertyNames(String.prototype));

console.log(Object.getOwnPropertyNames(Object.prototype));

Array.prototype.sayHello=function(){
    console.log("Hello!");
};

console.log(Object.getOwnPropertyNames(Array.prototype));

console.log(Object.getOwnPropertyNames(Function.prototype));

console.log(Object.getOwnPropertyNames(Number.prototype));

console.log(Object.getOwnPropertyNames(Boolean.prototype));

console.log(Object.getOwnPropertyNames(Date.prototype));

console.log(Object.getOwnPropertyNames(RegExp.prototype));

console.log(Object.getOwnPropertyNames(Error.prototype));

//prototype is shared methods used by all objects. this is used in constructor

ob={};// {} it mentioned that it is a Object with Object Properties ob=new Object();
console.log(ob.toString());


//No __proto__ means that no inheritance pure Object


ob=Object.create(null);//Create an object with no prototype
ob.name="mona";
console.log(ob.name);
//console.log(ob.toString()); so it shows error toString is not a function
//without prototype we cannot use any built in methods in Object

