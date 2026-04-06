let student = {  
  name: "Anu",
  "full name": "Anu Varsha",
  age: 20,
  marks: 85,
  greet: function() {
    console.log("Hello " + this.name);
  },
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

// Accessing properties
console.log(student.name);
console.log(student["full name"]);

// Adding properties
student.year = 2022;
student.course = "BBA";
console.log(student.year);                   
console.log(student.course);                  

// Deleting properties
delete student.course;
console.log(student.course);                 

// Nested object access
console.log(student.address.city);            

// Iterating  object properties
for (let key in student) {
  console.log(key, student[key]);
}


// Reference copy (shallow)
let stud = student;
stud.age = 24;
console.log(student.age); // 24  changed in original also

// Shallow copy using spread operator
let copy = { ...student };
copy.name = "Ammu";
copy.address.city = "erode";
console.log(student.name);                    
console.log(student.address.city);            

let user = {
  nickname: "Ammu",
  age: 21
};
let key = "nickname";
console.log(user.key); // undefined
console.log(user[key]); // "Ammu" 

// Computed property names
let fruit = "apple";
let shop = {
  [fruit]: 5
};
console.log(shop.apple);      

//shorthand property
let idno = 1;
let month = "march";
let users = {
  idno,     
  month     
};
console.log(users);           
console.log("idno" in users); 


let cart = {
  items: [
    { name: "shirt", price: 600 },
    { name: "Shoes", price: 1400 },
    { name: "saree", price: 2489 }
  ],
  total: function() {
    let sum = 0;
    for (let item of this.items) {
      sum += item.price;
    }
    return sum;
  }
};
console.log(cart.total());    

//object cloning(shallow)
let user1 = { name: "John" };
let clone = Object.assign(user1, { location: "erode" }, { phone: 9987868677 });
console.log(clone);          

let clone1 = Object.assign({}, user1);
clone1.name = "mona";
console.log(clone);         
console.log(clone1);          

// Deep clone with structuredClone
let us = {
  name: "mona",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone3 = structuredClone(us);
console.log(clone3.sizes === us.sizes);  
us.sizes.width = 60;
console.log(clone3.sizes.width);         

// JSON conversion
console.log(JSON.stringify(users));     

//constructor
function construct(name) {
  this.name = name;
  this.active = true;
}
let u1 = new construct("Deena");
let u2 = new construct("mona");
console.log(u1);              
console.log(u2);             


let user3 = {};
// console.log(user3.address.city) // TypeError!
console.log(user3?.address?.city);  // undefined (safe)


const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);           
console.log(typeof sym1);            

const sym3 = Symbol("id");
const sym4 = Symbol("id");
console.log(sym3 === sym4);           
console.log(sym3.toString());         
console.log(sym3.description);        

// Global symbol registry
let s1 = Symbol.for("userID");
let s2 = Symbol.for("userID");
console.log(s1 === s2);              
console.log(Symbol.keyFor(s1));       
console.log(Symbol.keyFor(sym4));    


let product = {
  name: "laptop",
  price: 80000,
  [Symbol.toPrimitive](hint) {
    console.log("Symbol.toPrimitive called with hint:", hint);
    if (hint === "number") {
      return this.price;
    }
    if (hint === "string") {
      return this.name;
    }
    return this.price;  // default value
  },
  valueOf() {
    console.log("valueOf called");
    return this.price;
  },
  toString() {
    console.log("toString called");
    return this.name;
  }
};

console.log(product + 1000);    
console.log(Number(product));    
console.log(String(product));   
console.log(product);           


let str = '{"name":"kala","age":20}';
let obj = JSON.parse(str);
console.log(obj.name);          


for (let key in user) {
  console.log(key, user[key]);
}