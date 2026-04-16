let form=document.getElementById("myform");

let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confirmpass = document.getElementById("confirmpass");

let userError=document.getElementById("userError");
let emailError=document.getElementById("emailError");
let passError=document.getElementById("passError");
let confirmError = document.getElementById("confirmError");

let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let strongPassword=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

function validateUsername(){
    let value=username.value.trim();

    if(value === ""){
        userError.textContent="Username required";
        userError.className="error";
        return false;
    }

    if(value.length < 5){
        userError.textContent="Username must have 5 character";
        userError.className="error";
        return false;
    }

    userError.textContent="";
    return true;
}

function validateEmail(){
    let value=email.value.trim();
    if(!emailPattern.test(value)){
        emailError.textContent="Invaild Email";
        emailError.className="error";
        return false;
    }
    emailError.textContent="";
    return true;
}

function validatePassword(){
    let value=password.value;
    if(!strongPassword.test(value)){
        passError.textContent="Invalid Password";
        passError.className="error";
        return false;
    }
    passError.textContent="";
    return true;
}

function validateConfirmPassword() {
    if (confirmpass.value !== password.value) {
        confirmError.textContent = "Password mismatch";
        confirmError.className = "error";
        return false;
    }

    confirmError.textContent = "";
    return true;
}


username.oninput=validateUsername;
email.oninput=validateEmail;
password.oninput=validatePassword;
confirmpass.oninput = validateConfirmPassword;

form.onsubmit=(e)=>{
    let isvalid = validateEmail()&&validatePassword()&&validateUsername()&&validateConfirmPassword();

    if(!isvalid){
        e.preventDefault();
    }
    else{
        console.log("form Submitted Successfully");
    }
}

