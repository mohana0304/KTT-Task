//Map  allow any datatype but object only allow strings or symbols
//Keys are unique

let mymap=new Map()
    .set("name","mona")
    .set(1,101);//add/updates entry

mymap.set(true,"boolean value");
mymap.set({id:1},"object key");

console.log(mymap.get(1));//retrieve value
console.log(mymap.get("name"));

console.log(mymap.size);

console.log(mymap.has("name"));//true check existence
console.log(mymap.has("age"));

console.log(mymap.delete("name"));

//mymap.clear();
// //removes all entries 


const userMap= new Map([
    ["name","Anu"],
    ["age",24],
    ["city","New York"]
]);

//map from existing object
const obj1 = {a:1,b:2,c:3};
const objmap = new Map(Object.entries(obj1));//convert object as map

//iterating map
for(let [key,value] of userMap){
    console.log(`${key}: ${value}`);
}

userMap.forEach((value,key)=>{
    console.log(`${key}  => ${value}`);
});

for(let key of userMap.keys()){
    console.log(key);
}

for(let val of userMap.values()){
    console.log(val);
}

for(let [key, value] of userMap.entries()){
    console.log(key ,value);
}


//copy map from another map
const copymap=new Map(objmap);
for(let [key,value] of copymap){
    console.log(`${key} : ${value}`);
}

//object as key 
const user1={id:1,name: "Deena"};
const user2={id:2,name:"dhayalan"};//different object with same content are different keys

mymap.set(user1,"admin");
mymap.set(user2,"user");
console.log(mymap.get(user1));
console.log(mymap.get({name:"Deena"}));//undefined
console.log(user1.name);

for(let [key,value] of mymap){
    console.log(`${key}  =>  ${value}`);
}
//the above for return [object object] for object key but this 
console.log([...mymap.keys()]);//return iterator of keys
console.log([...mymap.values()]);
console.log([...mymap.entries()]);//return iterator of [key,value]


//Set stores unique values of any type ,remove duplicates

const mySet=new Set();

//Adding values
mySet.add(1);
mySet.add("hello");
mySet.add({name:"john"});
mySet.add("john");
mySet.add(2);
mySet.add("hello");//ignore duplicate

console.log(mySet);//it also display number of enteries

console.log(mySet.has(2));
console.log(mySet.has("mona"));

console.log(mySet.size);

mySet.delete("hello");
console.log(mySet.has("hello"));
console.log(mySet.size);

//mySet.clear();

const fromArray = new Set([1, 2, 3, 2, 4, 3, 5]);
console.log("From array:", [...fromArray]);

const fromString = new Set("hello");
console.log("From string:", [...fromString]);  

for(let set of mySet){
    console.log(set);
}

mySet.forEach((key)=>{
    console.log(`${key} `)
});

const iterator=mySet.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log([...mySet]);
console.log(Array.from(mySet));//convert set to Array
console.log("----------------------");

console.log("keys: ",[...mySet.keys()]);
console.log("values : ",[...mySet.values()]);
console.log("Entries : ",[...mySet.entries()]);

arr=[8,9,2,5,3,7,1,4];

group=Map.groupBy(arr,n => n%2==0? 'even':'odd');
console.log(group);

//group by first letter
str=["abi","arun","balaji","deya","deena","fahim"];
group1=Map.groupBy(str,str1=>str1[0]);
console.log(group1);


//Weakmap keys must be objects 
let user={name:'Alice'};
const weakmap=new WeakMap();

weakmap.set(user,'secret data');
console.log(weakmap.get(user));
console.log(weakmap.has(user));

weakmap.delete(user);
console.log(weakmap.has(user));
//when user=null ,data is automatically garbage collected
//weakmap is not iterable,no size property 


//weakset collection of unique objects
let ob1={value:"9000"};
let ob2={value:"7900"};
const weakset=new WeakSet();

weakset.add(ob1);
weakset.add(ob2);

console.log(weakset.has(ob1));

weakset.delete(ob1);
console.log(weakset.has(ob1));
// When user2 = null it automatically removed from memory


//Regular Map/Set keep references strong ---> even if object is null the map keeps it alive in memory
//but weakmap/weakset allow automatic garbage collection when the object is not used then it delete it

// weakmap used 
// store private properties without exposing them


let my={name: "john"};
const map=new Map();
map.set(my,'secret data');
my=null;
console.log(map);

let weak={name:'jane_1234'};
const weakmap1=new WeakMap();
weakmap1.set(weak, 'secret data');
//console.log(weakmap1);
//weak=null;
//window.temp=weak;
//console.log(weakmap1);  

console.log(mymap.keys());
console.log(mymap.values());
console.log(mymap.entries());