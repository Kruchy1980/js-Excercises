// To Do List
//1. Deleting the tasks
//1a. Downloading the elements first variable
let tasks = document.querySelectorAll('ul li');
//Functions
//1a. Deleting the task
const deleteTask = (e) => {
    // Check if it is correct
    console.log(e.target); // the selected item/task
    // Now we can delete the task by remove the elemnt
    e.target.remove();
}


// Event listeners
//1a. now we can iterate bu every element using the forEach() methode.
tasks.forEach(task => task.addEventListener('click', deleteTask));