// const form=document.getElementById("myForm");

// form.addEventListener("submit",function(e){
//     e.preventDefault();

//     const formData=new FormData(form);

//     fetch("https://example.com/api",{
//         method:"POST",
//         body:formData
//     });
// });

//formData.append("name","mona");//add new value
//formData.set()//replace value
//formData.get("name");//get single value
//formData.getAll(key)//get multiple values (for same key)
//.delete(key),.has(key)//check if key exists

// let controller;

// function startFetch(){
//     controller =new AbortController();

//     fetch("https://example.com/api",{
//         signal: controller.signal
//     })
//     .then(res=>res.json())
//     .then(data=>console.log("Data received:",data))
//     .catch(err=>{
//         if(err.name === "AbortError"){
//             console.log("Fetch stopped!");
//         }else{
//             console.log("Error:",err);
//         }
//     });
// }

// function stopFetch(){
//     if(controller){
//         controller.abort();
//         console.log("Stopped");
//     }else{
//         console.log("no request to stop");
//     }
    
// }



const API = 'http://localhost:3000/products';
const list = document.getElementById('productList');
const progressText = document.getElementById('progress');
let controller;    
async function loadProducts() {
      list.innerHTML = '';
      controller = new AbortController();
      try {
        const res = await fetch(API, { signal: controller.signal });//Sends GET request, signal connects fetch to abort controller
        const reader = res.body.getReader();

        const contentLength = +res.headers.get('Content-Length');//get total file size from server , + convert string -> number

        let received = 0;
        let chunks = [];
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
            received += value.length;
            progressText.innerText = `Loading: ${received}/${contentLength}`;
        }

            const blob=new Blob(chunks);//convert chuck->JSON(one file like object)
            const text=await blob.text();//convert blob->text
            const data=JSON.parse(text);//convert text->JSON(products array)

            showProducts(data);
        }catch(err){
            console.log('Request cancelled or error:', err);
        }
}



function showProducts(products){
    list.innerHTML='';
    products.forEach(p=>{
        const li = document.createElement('li');
        li.innerHTML = `
      ${p.name} - ₹${p.price}
      <button onclick="deleteProduct(${p.id})">Delete</button>
      <button onclick="updateProduct(${p.id})">Update</button>`;
       list.appendChild(li);
    });
}

document.getElementById('productForm')
  .addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data=Object.fromEntries(formData.entries());//convert formdata into normal object

        data.price=Number(data.price);
        await fetch(API,{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(data)
        });

        loadProducts();
});

async function deleteProduct(id) {
      await fetch(`${API}/${id}`, {
        method: 'DELETE'
       });

       loadProducts();
}

async function updateProduct(id) {
      await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            id,
            name: "Updated Product",
            price: 999,
            category: "Updated",
            stock: 1,
            rating: 5
        })
      });
    loadProducts();
}

function cancelRequest() {
    if(controller){
        controller.abort();
        progressText.innerText='Request Cancelled';
    }
}




const url=new URL(API);

url.searchParams.append('category', 'electronics');
url.searchParams.append('_limit', 5);//add parameters
url.searchParams.set("_limit", "10");//update parameters
//url.searchParams.delete("category");//delete parameter

console.log(url);


console.log(url.href);// full URL
console.log(url.protocol);// http:
console.log(url.hostname);// localhost
console.log(url.pathname);// /products
console.log(url.search);// ?category=Electronics

const category = url.searchParams.get('category');
console.log(category);

console.log(url.origin);
console.log(url.host);// localhost:3000
console.log(url.hostname);//localhost
console.log(url.port);

url.hash = "#section1";
console.log(url.href);

url.username = "admin";
url.password = "1234";
console.log(url.href);

url.searchParams.append('category', 'Fashion');

console.log(url.searchParams.getAll('category'));

console.log(url.searchParams.has('category'));

console.log(url.searchParams.toString());

url.pathname = '/products/1';//change pathname
console.log(url.href);

url.protocol = 'https:';
console.log(url.href);



//xMLHttpRequest()

//old way to call an API (like fetch)

const xhr = new XMLHttpRequest();// create request

xhr.open('GET', 'http://localhost:3000/products'); 

xhr.onload = function () {// when response comes
  console.log(xhr.responseText);// print result
};

xhr.send();// send request


fetch('http://localhost:3000/products')
  .then(res => res.json())
  .then(data => console.log(data));


xhr.onload = function () {
  const data = JSON.parse(xhr.responseText);//xhr gives string convert into JSON
  console.log(data);
};

