import div,{ add,sub } from "./Math.js";
//import * as math from './Math.js';


//console.log(math.add(2,4));
console.log("Addition :"+add(5, 3));
console.log("Subtraction :"+sub(5, 3));
console.log("Division :"+div(10,3));


//Dynamic Import -->instead of loading everything at start . Load only when needed
import("./Math.js").then(module=>{
    console.log(module.mul(4,2));
});

async function load() {
    const module=await import("./Math.js");
    console.log(module.mul(9,7));
}
load();




