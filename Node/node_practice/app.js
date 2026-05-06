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

fetchpromises()
.then(console.log)
.catch((err)=>console.log(err));

async function run(){
    const data=await fetchData();
    console.log(data);
}
run();

const buffer=Buffer.from ("hello");
console.log(buffer);
console.log(buffer.toString());


