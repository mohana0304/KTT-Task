//Document

let heading=document.querySelector("h1");
heading.textContent="Hi!";
let ul=document.querySelector("ul");
ul.children
ul.parentElement
ul.firstElementChild.nextElementSibling
let li=document.createElement("li");
li.textContent="Item 3";
ul.appendChild(li)
ul.firstElementChild.remove();
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    alert("clicked!");
});

document.getElementById("title");
document.getElementsByClassName("item");
title.textContent="DOM Practice started!";
list.children
list.firstElementChild
list.lastElementChild
let li=document.createElement("li");
li.textContent="Item 1";
ul.prepend(li)
list.firstElementChild.nextElementSibling
document.body.style.backgroundColor="lightblue";
title.style.color="darkblue";
setTimeout(()=>{
    list.firstElementChild.remove();
},3000);
title.setAttribute("title","this is heading");
title.getAttribute("id");
title.removeAttribute("title");
window.innerWidth;


btn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.textContent="New Item";
    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
    });
    li.addEventListener("dblclick", () => {
        li.remove();
    });
    li.addEventListener("mouseover",()=>{
        li.style.backgroundColor="yellow";
    });
    li.addEventListener("mouseout",()=>{
        li.style.backgroundColor="";
    });
    list.appendChild(li);
});

//1. Create an Element
let div=document.createElement("div");
div.textContent="Hello";
document.body.append(div);

//2. Insertion Methods
let el = document.querySelector("h1");
let p = document.createElement("p");
p.textContent = "Before heading";
el.before(p); 
el.after(p);  

//3. insertAdjacentHTML / Element / Text
ul = document.querySelector("ul");
ul.insertAdjacentHTML("beforeend", "<li>New</li>");
ul.insertAdjacentText("afterbegin","some text")

let li= document.createElement("li");
li.textContent="Element Insert";
ul.insertAdjacentElement("beforebegin",li);



//4. cloneNode
let copy=el.cloneNode();
copy

copy = el.cloneNode(true);
copy


//5.DocumentFragment
let fragment=document.createDocumentFragment();
for(let i=0;i<5;i++){
    let li=document.createElement("li");
    li.textContent=i;
    fragment.appendChild(li);
}
document.body.append(fragment);
