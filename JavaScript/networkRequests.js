//fetch API is a modern Javascript way to make HTTP requests


async function fetchExample(){
    try{
        console.log("fetching data....");
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error("HTTP Error: "+response.status);
        }
        
        const data=await response.json();
        console.log("GET Data: ",data);


        console.log("sending data....");
        const postresponse=await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({//convert js object -> Json string , because server understands JSON not Js object
                title: "My Post",
                body:"This is content",
                userId:1
            })
        });

        const result=await postresponse.json();
        console.log("POST Response: ",result);
    }catch(err){
        console.error("Error occurred: ",err.message);
    }
}
fetchExample();

//response.json() - convert response into JSON object
//response.text() - convert reponse into plain text
//response.formData() - convert '' into form data object access using .get("key")
//response.blob() - ''  into file(image,video,PDF) used for downloads
//response.arrayBuffer() - into raw binary data



//formData  is a JS object used to send form data to a server
//use it when submiiting HTML forms, uploading files ,Sending data in form format

const formData=new FormData();


formData.append("name","Mohana");//add data using append(key value pair)
formData.append("age",22);

//const fileupload=document.getElementById("input[type=file]");
//formData.append("file",fileupload.files[0]);


async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const reader = response.body.getReader();
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    received += value.length;

    console.log("Downloaded bytes:", received);
  }
}

getData();


let controller;

function startFetch(){
    controller =new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts",{
        signal: controller.signal
    })
    .then(res=>res.json())
    .then(data=>console.log("Data received:",data))
    .catch(err=>{
        if(err.name === "AbortError"){
            console.log("Fetch stopped!");
        }else{
            console.log("Error:",err);
        }
    });
}

function stopFetch(){
    controller.abort();
}