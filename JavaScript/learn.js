let student={  
  name:"Anu",
  "full name":"Anu Varsha",
  age:20,
  marks:85,
  greet: function() {
    console.log("Hello " + this.name);
  },
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
console.log(student.name);

student.year=2022;
student.course="BBA";

console.log(student.year);
console.log(student.course);

delete student.course;
console.log(student.course);

console.log(student.address.city);

console.log(student["full name"]);
for(let key in student){
  console.log(key,student[key]);
}

let stud=student;
stud.age=24;
console.log(student.age);

let copy={...student};
copy.name="Ammu";

copy.address.city="erode";
console.log(student.name);
console.log(student.address.city);
let user={
  nickname:"Ammu",
  age:21
}
let key="nickname";
console.log(user.key)//undefined
console.log(user[key]);

let fruit="apple";
let shop={
    [fruit]:5
};
console.log(shop.apple);

//shorthand property
let idno=1;
let month="march";
let users={
    idno,
    month
};
console.log(users);
console.log("idno" in users);
let cart={
  items:[//Array of objects
    { name: "shirt",price:600},
    { name:"Shoes",price:1400},
    { name:"saree",price:2489} 
  ],
  total:function(){//function in object
    let sum = 0;
    for(let item of this.items){
      sum += item.price;
    }
    return sum;
  }
};
console.log(cart.total());

let user1 = { name: "John" };
let clone=Object.assign(user1,{location:"erode"},{phone:9987868677});

let clone1=Object.assign({},user1);
clone1.name="mona";
console.log(clone);
console.log(clone1);
let us={
  name:"mona",
  sizes:{
    height:182,
    width:50
  }
};
let clone3=structuredClone(us);
console.log(clone3.sizes === us.sizes);
us.sizes.width=60;
console.log(clone3.sizes.width);

console.log(JSON.stringify(users));//convert object -->JSON string


function construct(name){
  this.name=name;
  this.active=true;
}
let u1=new construct("Deena");
let u2=new construct("mona");
console.log(u1);
console.log(u2);



let user3={};
//console.log(user3.address.city) this cause error for that optional chaining ?. is used
console.log(user3 ?. address ?. city);

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);  
console.log(typeof sym1);     
const sym3 = Symbol("id");
const sym4 = Symbol("id");
console.log(sym3 === sym4);  
console.log(sym3.toString()); 
console.log(sym3.description);

//check a global registry id symbol exists reuse it if not create new
let s1=Symbol.for("userID");
let s2=Symbol.for("userID");
console.log(s1===s2);

console.log(Symbol.keyFor(s1));//value inthe key
console.log(Symbol.keyFor(sym4));//undefined this work in only (symbol.for) key



let product={
  name:"laptop",
  price:80000,
  [Symbol.toPrimitive](hint){
    console.log("Symbol.toPrimitive called with hint:", hint);
    if(hint==="number"){
      return this.price;
    }
    if(hint==="string"){
      return this.name;
    }
    return this.price;//default value
  },

  valueOf(){
    console.log("valueOf called");
    return this.price;
  },
  toString(){
    console.log("toString called");
    return this.name;
  }
};
console.log(product+1000);//default 
console.log(Number(product));//hint "number"
console.log(String(product));
console.log(product);



//number methods
let num=12.897;

console.log(num.toFixed(1));
console.log(num.toString());

console.log(num.toPrecision(3));//12.8
console.log(Number.isInteger(num));//10 -->true   10.5 -->false

//Math.round,floor,ceil,max,min,pow,sqrt,random(0 to 1),cqrt

let billion=1_00_000_000;//or 1e8  _ as separator js engine simply ignores 
console.log(billion);
console.log(1e8);
let mcs=0.000001;//1e-6
console.log(mcs);
console.log(1e-6);
console.log(0xff)//0xFF same case doesnt matter

let a=0b101;//binary form of 5
let b=0o5;//octal form of 5
console.log(a==b);

num=255;
console.log(num.toString(16))//num.tostring(base) hexadecimal
console.log(num.toString(2))//decimal

console.log(isNaN(107));//("107") same answer because this also a number
console.log(isNaN("abc"));//Number.isNaN() 
//finite number (not Infinity, not -Infinity, not NaN)
console.log(isFinite("100"));
console.log(isFinite("abc"));//Number.isFinite()
console.log(isFinite(null));
//isNaN(), isFinite() both converts values first but number.isfinite or nan is not converted

console.log(Object.is(0,-0))// this is same as  === but it check value,type and also sign
console.log(Object.is(NaN,NaN))

/*

//Parse convert data from one format to another

console.log(parseInt("100")) //100
parseInt("100px") //100
parseInt("abc") //NaN

console.log(parseFloat("10.5"))//10.5

console.log(parseInt("100px")); // 100
console.log(Number("100px"));   // NaN
//Number() is stricter than parseInt

console.log(parseInt("101", 2));//2 represent binary (base)
*/

let str='{"name":"kala","age":20}';
let obj=JSON.parse(str);
console.log(obj.name); // Converts JSON string → JavaScript object

//String are immutable,collection of character
//JavaScript temporarily converts primitive → object (autoboxing)

str="Hello Mona";
let str1="  hello  ";
console.log(str[0]);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.includes("ll"));
console.log(str.indexOf("M"));
console.log(str.slice(1,5))
console.log(str.slice(-4));
console.log(str.substring(0,7));//slice support negative value substring not
console.log(str.replace("Hello","Hi"))
console.log(str1.trim());
console.log(str.split(" "));
console.log(str.startsWith("He"))
console.log(str.endsWith("na"));
console.log(str.search("o"));//return first occurring index
console.log(str.charAt(1));
console.log(str.charCodeAt(1))//ASCII value of 1 index char
console.log(str.codePointAt(0))//same as charCodeAt()
console.log(String.fromCodePoint(90))//Z
console.log(str.at(-1))//return lastchar 
console.log(str.replaceAll("o","*"))
console.log("hi ".repeat(3))
console.log(str.padStart(20,"*"));
console.log(str.padEnd(20,"*"))
console.log(str.localeCompare(str1))//first >second -->1  ,equal -->0 first<second -->-1
console.log("hello129mona34".match(/\d+/));
console.log([..."hello129mona34".matchAll(/\d+/g)]);
console.log(str.replace("o","&"))
console.log(`hello\nworld`);
console.log(String.raw`hello\nworld`)//ignore escape characters


//Array multiple values in single variable
//js array are dynamic we can change size anytime and mix data type
let color=["red","blue","green"];
console.log(color[0]);
color.push("pink")//add at end
color.unshift("orange")//add at beginning
color.pop();//remove last
color.shift();//remove first
color.push("red");
console.log(color.indexOf("red"));
console.log(color.lastIndexOf("red"));

let col=color.with(1,"orange");
console.log(col)
console.log(color);

for(let i of color){
  console.log(i);
}
color.forEach((item,index)=>console.log(item,index));

let arr=[1,2,3,4];

let double =arr.map(n=>n*2);//map is to modify every element in arr
console.log(double)
let even=arr.filter(n=>n%2 === 0);//filter select element based on condition
console.log(even)
console.log(color.includes("red"));
console.log(arr.length);
let mixed = [1, "hello", true, null];
console.log(mixed)

let res=arr.find(n=>n>3);
console.log(res);
console.log(arr.some(n=>n>3))//return true if at least one element matches

console.log(double.every(n=>n%2===0))//return true if all elements match
console.log(arr.concat(double));//Merge Arrays
console.log(arr.slice(1,3));//copy part of array

arr.splice(0,2);//remove 2 element from index 0
console.log(arr);
console.log(arr.at(-1));

let arr1=[9,6,0,1,33,8,18];
console.log(arr1.toSorted())//console.log(arr1.sort());
console.log(arr1.toReversed())//console.log(arr1.reverse())
//sort and reverse change the original array but tosorted,
// toReversed not change the original

//reduce array to a single value liike total,count items,flat the array etc..
let sum=arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

let arr2 = [[1, 2], [3, 4], [5]];
let flat = arr2.reduce((a,c)=>a.concat(c),[]);
console.log(flat);

let arr3=['anu','varsha','arun','mega'];
console.log(arr3.join(';'));


for(let key in user){
  console.log(key,user[key]);
}

for(let a of arr3){
  console.log(a);
}

let iterator=arr1[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//Destructor is unpack values from arrays or objects into separate variables
let array=['john',23,101];
const [names,age,rollno]=array;
console.log(names);
console.log(age);
console.log(rollno);

let c=["red","blue","green"];
const [first,second]=c;
console.log(first);
console.log(second);

const [first1, ,third]=c;
console.log(first1);
console.log(third);

const [first2,second1,third1="pink"]=c;
console.log(first2);
console.log(second1);
console.log(third1);

let number=[1,8,9,0,3];
const [n1,n2,...n3]=number;
console.log(n1);
console.log(n2);
console.log(n3);



const useres={
  names:"john",
  age:23,
  rollno:101
};

const {names: username,age: userage}=useres;// Extract 'names' into variable 'username'

console.log(username);
console.log(userage);

//Date and Time

const now=new Date();

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());

console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toTimeString());

console.log(now.toLocaleString());      
console.log(now.toLocaleDateString());  
console.log(now.toLocaleTimeString());

const curr=new Date("2026-04-04T04:21:40.914Z");
console.log(curr.toString());

console.log(now.getHours()); //local hour     
console.log(now.getUTCHours());//UTC hour

console

console.log(now.toLocaleDateString().replace(/\//g, '-'));  


for (let i = 0; i < 3; i++){
    console.log(i);
}