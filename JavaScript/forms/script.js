
// //form properties

let form = document.getElementById("myform");

console.log(form.elements);
console.log(form.length);
console.log(form.name);
console.log(form.action);
console.log(form.method);
console.log(form.target);
console.log(form.id);
console.log(form.elements.username.value);
console.log(form.elements.password.name);
console.log(form.elements.password.type);
console.log(form.elements.remember.checked);
form.elements.username.disabled = true;
form.elements.username.readOnly = true;
form.elements.username.disabled = false;

//form.submit();form.reset();

console.log(form.checkValidity());

console.log(form.reportValidity());

console.log(form.elements.username.focus());
console.log(form.elements.username.blur());
console.log(form.elements.username.select());

//Disable browser validation
form.noValidate = true;
console.log(form.checkValidity());

form.elements.username.readOnly = false;
let input = document.getElementById("username");

//every time the value change
input.addEventListener("input", () => {
    console.log("INPUT event:", input.value);
});

//only when user finish edit and leave the fiels
input.addEventListener("change", () => {
    console.log("CHANGE event:", input.value);
});

//when user cut text(ctr+X or right click->cut)
input.addEventListener("cut", () => {
    console.log("CUT event triggered");
});

//when user copy text
input.addEventListener("copy", () => {
    console.log("COPY event triggered");
});

/*

input.oninput = function () {
    console.log("INPUT:", input.value);
};

input.onchange = function () {
    console.log("CHANGE:", input.value);
};

input.oncopy = function () {
    console.log("COPY triggered");
};

input.oncut = function () {
    console.log("CUT triggered");
};

input.onpaste = function (e) {
    console.log("PASTE:", e.clipboardData.getData("text"));
};

*/

form.onsubmit = (e) => {
    console.log("Form submitted (event)");
     //validate input
     let username=form.elements.username.value.trim();
     let password=form.elements.password.value.trim();

     if(username === ""){
        alert("username is required");
        e.preventDefault(); 
        return;
     }
     if(username.length<5){
        alert("username must be at least 3 characters");
        e.preventDefault(); 
        return;
     }
     if(password.length<8){
        alert("password must be at least 8 characters");
        e.preventDefault(); 
        return;
     }
    // stops actual submission
};



//Inbuild validation
/*form.onsubmit = (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity(); // shows browser error UI
    }
};
*/


//form.submit(); it not trigger onsubmit event

//form.requestSubmit();//this trigger submit event 



// document.getElementById("myform").addEventListener("submit", function(e) {
//   e.preventDefault();

//   let username= document.getElementById("username");
//   let password=document.getElementById("password");

//   let error=[];

//   if(username.value.trim()===""){
//     error.push("Username is required");
//   }else if(username.value.trim().length <6){
//     error.push("Username must have 6 character");
//   }

//   if (password.value.trim() === "") {
//     error.push("Password is required");
//   } else if (password.value.length < 8) {
//     error.push("Password must be at least 8 characters");
//   }

//   let errordiv=document.getElementById("errorsummary");

//   errordiv.innerHTML = "";

//   if(error.length > 0){
//     let html="<h3>please fix the listed errors: </h3><ul>";
//     error.forEach(err=>{
//         html+="<li>"+err+"</li>";
//     });
//     html+="</ul>";

//     errordiv.innerHTML=html;
//   }else{
//     errordiv.innerHTML="<p style='color:green;'>Form submitted successfully!</p>";
//   }

// });


