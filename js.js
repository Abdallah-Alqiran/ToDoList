//Setting up variables
let TheInput = document.querySelector(".Todo-continer .add-task input");
let Plus = document.querySelector(".plus");
let tasksContiner = document.querySelector(".task-content");
let taskCounter = document.querySelector(".task-count span");
let taskCompleted = document.querySelector(".task-completed span");
let NoMessage = document.querySelector(".no-task-message")

// Focus in the field
window.onload = function() {
    TheInput.focus();
};


Plus.onclick = function () {
    if (TheInput.value === '')
    {
        console.log("You should input your task");
    }
    


    else {

         

        //remove No task message
        NoMessage.remove();
        
        //create span
        let mainSpan = document.createElement("span");
        
        //create delete button
        let mainDelete = document.createElement("span");

        //create text to main span
        let textMain = document.createTextNode(TheInput.value);

        //create text to delete span
        let deleteMain = document.createTextNode("delete");

        //Add text to span
        mainSpan.appendChild(textMain);

        //Add class to span
        mainSpan.className = 'task-box';

        //Add delete to span
        mainDelete.appendChild(deleteMain);

        //Add class to delete
        mainDelete.className = 'delete';

        //Add delete to main
        mainSpan.appendChild(mainDelete);

        //Add the task to continer
        tasksContiner.appendChild(mainSpan);

        //To focus again
        TheInput.value='';
        TheInput.focus();

        //call counter function
        calculateTasks();
       

    } 
        
}


document.addEventListener('click', function (e) {
    //delete task
    if (e.target.className == 'delete')  {
             e.target.parentNode.remove();
    }


    if (e.target.classList.contains('task-box')) {
            e.target.classList.toggle("finished");
        
        }
        
        calculateTasks();
})


function calculateTasks () {

    //calculate all tasks 
    taskCounter.innerHTML = document.querySelectorAll('.task-box').length;

    //calculate all finished tasks 
    taskCompleted.innerHTML = document.querySelectorAll('.finished').length;
}