// Add task to List
//1. First variables
//1a. Input task
const addItemInput = document.querySelector('.addTask');
//1b. Add Task form - needed to add the tasks not on button but on form submit only
const addTaskForm = document.querySelector('#addTaskForm');
//1c. Task Calculator - for display the sum of tasks
const taskCalculator = document.querySelector('.taskCalculator span');
//1d. Task list we have already declared in filter&search.js file and it is no need to declare it once more
//Create the array toDoList
const toDoList = [];


//2. Functions
const addTask = (e) => {
    //check the event
    // console.log(e);
    // first need to prevent the page refreshing on button click
    e.preventDefault();
    // check if the task list is visible
    // console.log(taskList);
    // and check if the task item is also visible
    // console.log(tasksItem);
    // and just check if the input is correctly uploaded
    // console.log(addItemInput); // is working so we can now get the value of input to add it to the list
    // so it is easier to create the task item to variable
    const newTask = addItemInput.value;
    // b4 we add the new task we can check if the content is no empty
    if (newTask === '') return;
    // check
    // console.log(newTask); // now we have uploaded the text so we can add it to the list as a newItem
    const newItem = document.createElement('li');
    // we can add the class to the list element lets name it task
    newItem.className = 'task';
    // add the content of the new item
    newItem.innerHTML = newTask + '<button class="removeTask">&#xd7;</button><button class="taskDone">&#x2713;</button>';
    // console.log(newItem);
    // here we can add the element to our array
    toDoList.unshift(newItem);
    // console.log(toDoList);
    // Now we would like to clrear the table
    renderList();
    // and after adding item we can clear the input
    taskList.appendChild(newItem);
    //clear input
    addItemInput.value = '';
    // 2b. Task Counter calculator
    // We can get the list item once more
    // const itemsToDo = document.querySelectorAll('li.task');
    //check
    // console.log(itemsToDo);
    // now display the quantity of tasks in our list - all of them
    taskCalculator.textContent = tasksItem.length;
    // we can add the done or remov- need to remember that it is a li part/newItem part  button executing in here as well like below
    newItem.querySelector('.removeTask').addEventListener('click', deleteTask);
    //as well as the done button element
    newItem.querySelector('.taskDone').addEventListener('click', completedTask);
}

//3.Event Listener
// 3a. Event Listener on form
addTaskForm.addEventListener('submit', addTask);