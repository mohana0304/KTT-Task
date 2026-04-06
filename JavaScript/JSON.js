const obj={name:"ram",age:25};

//convert js -> JSON string
const jsonString=JSON.stringify(obj);
console.log(jsonString);

//convert JSON string ->js
const obj1=JSON.parse(jsonString);
console.log(obj1);

console.log(JSON.stringify(obj, null, 2));//null is for include all data without filter anything 2 is for spaces


const user = {
  name: "Ram",
  age: 25,
  password: "12345",

  /*toJSON() {
    return {
      name: this.name //Customize how object converts to JSON
    };
  }*/
};


console.log(JSON.stringify(user,["name","age"],4));

console.log(JSON.stringify(user));

const fil=JSON.stringify(user,(key,value)=>{
    if(key == "password") return undefined;
    return value;
},2);

console.log(fil);


const users = [
  { name: "Ram", age: 25 },
  { name: "Sita", age: 22 }
];

const json = JSON.stringify(users);
const parsed = JSON.parse(json);

console.log(parsed[1].name);
console.log(parsed[1]);
