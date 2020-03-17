// To Do List
//1. Deleting the tasks
//1a. Downloading the elements first variable - we need to declare like below if we will use the array index to remove but better is to do it like below in deleteTask function
// let tasks = document.querySelectorAll('li');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// we need to create task list in here because the filter&earch file is disconnected
const taskList = document.querySelector('ul');
//as well as task item
const tasksItem = document.getElementsByClassName('task');
// We do not need the buttons in here because we are executing complete and  delete function after the creating an list item so we have not fixed buttons  in HTML yet - we will add them after creating the completly removing done tasks or all tasks not  of this file we will need it some time later when will make fully working todoList page.
//1a. RemoveButton
// const removeButton = document.getElementsByClassName('removeTask');
// // 2. Marking the tasks done
// //2a. Done Button
// const doneButton = document.getElementsByClassName('taskDone');
//Functions
//1a. Deleting the task
const deleteTask = (e) => {
        // just because we had change the identificators of list element - we no longer are created the data- keys in the new list items so we need to use something else as for exzmple parentNode staff as list item to do something
        // e.target.parentNode.remove();// we do not need that line of code at present because we allways be rendering the new table fully
        // R1. Firstly we need to know wht is the index of element which we want to remove
        const index = e.target.parentNode.id;
        // check
        console.log("the task index is:" + index);
        // R2. Now we need to remove the element from the array as well
        toDoList.splice(index, 1);
        //check
        console.log(toDoList);
        // Now we should to generate our table once more for updating index of elements
        // Now we would like to clrear the table
        // taskList.textContent = '';
        // now we can display the toDoList
        // just because the element is used in many places we can create the variable of function and set it in so many places we want
        renderList();

        // now we need to assign the item list length to be dynamically updated
        taskCalculator.textContent = tasksItem.length;
        //---------------------------------
        //#########################################
        // if we know how long the list is we can do as below
        //--------------------------------
        // // Check if it is correct
        // console.log(e.target); // the selected item/task
        // // Now we can delete the task by remove the elemnt
        // e.target.remove();
        //1a. Now we need to change the code a little bit to remove the tasks not event target which now is the button
        // first we need to declare index of item like that 
        // const index = e.target.dataset.key;
        // // check if it works
        // console.log(index);
        // // Now we can remove the specific  task by collecting them with the specific attribute
        // document.querySelector(`li[data-key="${index}"]`).remove();
        //---------------------------------
        //############################# 
        //---------------------------
    }
    //2. Making the task done
const completedTask = (e) => {

        // e.target.parentNode.style = "text-decoration: line-through; color:#717171; color: #ccc";
        // Let add the class to an element as well to later have possibility to remove the completed elements as one - we can toggle class to have possibility to remove the element
        e.target.parentNode.classList.toggle('completed');
        // D1. Firstly we need to know wht is the index of element which we want to remove
        const index = e.target.parentNode.id;
        // check
        // console.log("the done index is:" + index, e.target.parentNode.id, e.target.parentNode.classList);

        // we can also add the class to our li item to recognize it later as done and to display only done or undone tasks
        // e.target.parentNode.classList.add('completed');
        // This is the empty class which can br later usefull for filtering the tasks

        //---------------------------------
        //############################# 
        //---------------------------
        // // firstly as above we need to create index because the other is scoped just for the function so we can treat it as a separate module
        // const index = e.target.dataset.key;
        // // for check
        // console.log(index);
        // // now when we know it works we can add a specific style to the elements
        // document.querySelector(`li[data-key="${index}"]`).style = "text-decoration: line-through; color:#717171; color: #ccc";

        //---------------------------------
        //############################# 
        //---------------------------
    }
    // rendering the list function
const renderList = () => {
    taskList.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        // Now we can call the element and tell to it to contain an id - will be easier removing it later or filtering or whatever
        toDoElement.id = key; // key is an index of element
        taskList.appendChild(toDoElement);
    });
}

// Event listeners



//---------------------------------
//############################# 
//---------------------------

//1a 1. now we can iterate by every element using the forEach() methode.
// tasks.forEach(task => task.addEventListener('click', deleteTask));

// //1a. Now we declare the delete task event for button not when clicked on text
// removeButton.forEach(item => item.addEventListener('click', deleteTask));

// //2. Marking the completed tasks
// doneButton.forEach(item => item.addEventListener('click', completedTask));

//---------------------------------
//############################# 
//---------------------------