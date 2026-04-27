console.log("start");

setTimeout(()=>{
    console.log("Timeout finished");
},2000);

console.log("End");

function fetchData(callback){
    setTimeout(()=>{
        console.log("Data received");
    },1000);
}

fetchData((data)=>{
    console.log(data);
});

function fetchpromises(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("promise data");
        },1000);
    });
}

fetchpromises().then(console.log);

async function run(){
    const data=await fetchData();
    console.log(data);
}
run();

const buffer=Buffer.from ("hello");
console.log(buffer);
console.log(buffer.toString());


const fs= require("fs");
const stream =fs.createReadStream("sample.txt","utf8");
stream.on("data",(chunk)=>{
    console.log("Chuck:",chunk);
});  

const path = require("path");

console.log(path.basename(__filename));
console.log(path.extname(__filename));
