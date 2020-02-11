// To Do List
//1. Deleting the tasks
//1a. Downloading the elements first variable - we need to declare like below if we will use the array index to remove but better is to do it like below in deleteTask function
// let tasks = document.querySelectorAll('li');
//1a. RemoveButton
const removeButton = document.getElementsByClassName('removeTask');
// 2. Marking the tasks done
//2a. Done Button
const doneButton = document.getElementsByClassName('taskDone');
//Functions
//1a. Deleting the task
const deleteTask = (e) => {
        // just because we had change the identificators of list element - we no longer are created the data- keys in the new list items so we need to use something else as for exzmple parentNode staff as list item to do something
        e.target.parentNode.remove()
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

    e.target.parentNode.style = "text-decoration: line-through; color:#717171; color: #ccc";
    // we can also add the class to our li item to recognize it later as done and to display only done or undone tasks
    e.target.parentNode.classList.add('completed');
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