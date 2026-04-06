//reverse number
num=1289;
console.log(Number(num.toString().split('').reverse().join('')));

//count vowels
str="hello";
let vowel="aeiouAEIOU";
console.log(str.split('').filter(char=>vowel.includes(char)).length);


//sort
let arr=[8,0,7,90,56,78,66,32,25];
arr.sort((a,b)=>a-b);
console.log("Ascending: "+arr);
arr.sort((a,b)=>b-a);
console.log("Descending: "+arr);
console.log(arr.reverse());


const mymap=new Map();
mymap.set('name','mona');
mymap.set(1,21);
console.log(mymap.get(1));
console.log(mymap.has('name'));
mymap.delete(1);
console.log(mymap.size);
mymap.forEach((value,key)=>{
    console.log(`${key} => ${value}`);
});


let arr1=[9,8,0,7,9,7,6,5,8,4,9,4,5,3,2];
//const myset=[...new Set(arr1)];
const myset=new Set(arr1);
console.log(myset);

