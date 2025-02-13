// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

let taskText=taskInput.value .trim();

// Function to add a task
function addTask() {

    //console.log("Button cliced")
    let taskText=taskInput.value .trim();

    let li =document.createElement("li");
    //taskText.push
    li.textContent=taskText;
    taskList.appendChild(li);
    
    // take task text

    // Append task
    taskInput.value="";

    // Clear input
}

// Event Listener
addTaskButton.addEventListener("click",addTask);