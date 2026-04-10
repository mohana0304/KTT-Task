
//Math.random() * (max - min + 1) + min ----> in specific range



let s = "text";          
let n = 42;               
let big = 9007199254740991n;
let bool = true;            
let nothing = null;       
let notDefined;            
let sym = Symbol("id");    
let obj = { name: "John" };

//Type conversion
String(123);      
Number("123");    
Boolean(1);     
Boolean(0);   
Boolean(""); 

//unary operator
console.log(+"42");
console.log(typeof (+"  100"));//trim whitespace and converted to number
//+null --> 0 , +undefined -->NaN 

//!!convert any value to boolean equivalent
console.log(!!"hello")//true (42,{},[])
console.log(!!"")//false (0,null,undefined,NaN)

//number 
let num = 12.897;

console.log(num.toFixed(1));      // "12.9"
console.log(num.toString());       // "12.897"
console.log(num.toPrecision(3));   // "12.9"
console.log(Number.isInteger(num)); // false

// Math methods
// Math.round(), Math.floor(), Math.ceil(), Math.max(), Math.min(), 
// Math.pow(), Math.sqrt(), Math.random(), Math.cbrt()

// Numeric separators and scientific notation
let billion = 1_000_000_000;  // or 1e8
console.log(billion);           
console.log(1e8);             
let mcs = 0.000001;// 1e-6
console.log(mcs);              
console.log(1e-6);             

// Different number systems
console.log(0xff);// 255 (hexadecimal)
let a = 0b101; // binary form of 5
let b = 0o5; // octal form of 5
console.log(a == b);           

num = 255;
console.log(num.toString(16));  
console.log(num.toString(2));   

// isNaN and isFinite
console.log(isNaN(107));        
console.log(isNaN("abc"));      
console.log(isFinite("100"));   
console.log(isFinite("abc"));   
console.log(isFinite(null));    

// Object.is() - similar to === but it check value,type and also sign
console.log(Object.is(0, -0));  
console.log(Object.is(NaN, NaN)); 

// Parse methods
console.log(parseInt("100"));    
console.log(parseInt("100px"));  
console.log(parseInt("abc"));    
console.log(parseFloat("10.5")); 
console.log(parseInt("101", 2)); 

console.log("---------------------------------");

// Strings are immutable
let str = "Hello Mona";
let str1 = "  hello  ";

console.log(str[0]);              
console.log(str.length);          
console.log(str.toLowerCase());   
console.log(str.includes("ll")); 
console.log(str.indexOf("M"));    
console.log(str.slice(1, 5));     
console.log(str.slice(-4));     
console.log(str.substring(0, 7)); 
console.log(str.replace("Hello", "Hi"));
console.log(str1.trim());        
console.log(str.split(" "));   
console.log(str.startsWith("He")); 
console.log(str.endsWith("na")); 
console.log(str.search("o"));  
console.log(str.charAt(1)); // "e"
console.log(str.charCodeAt(1)); //(ASCII value)
console.log(str.codePointAt(0));
console.log(String.fromCodePoint(90)); // "Z"
console.log(str.at(-1));        
console.log(str.replaceAll("o", "*")); 
console.log("hi ".repeat(3)); 
console.log(str.padStart(20, "*")); 
console.log(str.padEnd(20, "*"));  
console.log(str.localeCompare(str1)); //first >second -->1  ,equal -->0 first<second -->-1
console.log("hello129mona34".match(/\d+/));
console.log([..."hello129mona34".matchAll(/\d+/g)]); 
console.log(`hello\nworld`);      
console.log(String.raw`hello\nworld`); // ignores escape characters

console.log("--------------------------------------------");
//Array
let color = ["red", "blue", "green"];

console.log(color[0]);          
color.push("pink"); // add at end
color.unshift("orange");// add at beginning
color.pop();// remove last
color.shift();// remove first
color.push("red");
console.log(color.indexOf("red"));     
console.log(color.lastIndexOf("red"));

let col = color.with(1, "orange");
console.log(col);// new array with element replaced
console.log(color);// original unchanged


for (let i of color) {
  console.log(i);
}
color.forEach((item, index) => console.log(item, index));


// Array transformations
let arr = [1, 2, 3, 4];
let double = arr.map(n => n * 2);
console.log(double);             

let even = arr.filter(n => n % 2 === 0);
console.log(even);              

console.log(color.includes("red")); 
console.log(arr.length);           

let mixed = [1, "hello", true, null];
console.log(mixed);                

// Search 
let res = arr.find(n => n > 3);
console.log(res);                  

console.log(arr.some(n => n > 3));    
console.log(double.every(n => n % 2 === 0)); 

console.log(arr.concat(double));   
console.log(arr.slice(1, 3));     

arr.splice(0, 2); // remove 2 elements from index 0
console.log(arr);                  
console.log(arr.at(-1));         


let arr1 = [9, 6, 0, 1, 33, 8, 18];
console.log(arr1.toSorted()); // original unchanged if arr.sort(),reverse() it change the original    
console.log(arr1.toReversed());  
console.log(arr1);                 


let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);                  

let arr2 = [[1, 2], [3, 4], [5]];
let flat = arr2.reduce((a, c) => a.concat(c), []);
console.log(flat);                

// Join
let arr3 = ['anu', 'varsha', 'arun', 'mega'];
console.log(arr3.join(';'));       


for (let a of arr3) {
  console.log(a);
}


/*let iterator = arr1[Symbol.iterator]();
console.log(iterator.next());    
console.log(iterator.next());     
console.log(iterator.next()); */

let iterator={
    [Symbol.iterator](){
        let i=0;
        return{
            next(){
                if(i<arr1.length){
                   return{value:arr1[i++],done:false};
                }
                else{
                    return{value:undefined,done:true};
                }
            }
        };
    }
};

for(let val of iterator){
    console.log(val);
}


