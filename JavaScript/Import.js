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




//DOM

/*
Selecting Elements --->getElementById("title")
                       getElementByClassName("box")
                       getElementByTagName("p")
                       
                       querySelector()- selects first matching element
                       querySelectorAll("p")-selects all matching elements

                       querySelector("h1").innerText="hello" - change visible text
                       querySelector("div").innerHTML="<b>Bold</b>" -changes HTML inside element
                       .textContent="New text" -gets/sets all text(even hidden)

                       document.body.style.backgroundColor="yellow"

                       document.createElement("div");

                       document.body.appendchild(div);

remove(),setAttribute("src","image.jpg"),getAttribute("href"),removeAttribute("disabled");
*/
