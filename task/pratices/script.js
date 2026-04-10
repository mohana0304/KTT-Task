"use strict"; 


let userName = prompt("Enter your name:");
document.getElementById("welcome").innerText = "Hello " + userName;


// 3. Function
function addTask() {
let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "delete";

  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}