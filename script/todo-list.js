// Variable that contains item in the TO-DO list
var tasks = ["Study AI", "Prepare presentations", "Think possible presents", "Workout"];

/**
 * Generates the contents of the TO-DO list based on the list tasks
 */
$(document).ready(function fetchTODOlist(){
    var list = document.getElementById("todo-un-list")
    for(var i = 0;i < tasks.length; i++){
        var entry = document.createElement('li');
        entry.className += "todo-item";
        entry.innerHTML = "<input type='checkbox' id='rem' name='rem' value='rem'>" + tasks[i] + "   <span class ='remove-list-item' onclick='removeParentItem(this)'>&times;</span>";
        list.appendChild(entry)
    }

});

/** 
 * Adds a new item to the TO-DO list
*/
function addItem(){
        var list = document.getElementById("todo-un-list")
        var entry = document.createElement('li');
        entry.className += "todo-item";
        entry.innerHTML = "<input type='checkbox' id='rem' name='rem' value='rem'>" + tasks[tasks.length-1] + "   <span class ='remove-list-item' onclick='removeParentItem(this)'>&times;</span>";
        list.appendChild(entry)
    }


/**
 * Adds a new item to the tasks lists and renders it on the page
 */
function addTODO(){
    var input = document.getElementById("add-todo-item")
    if(input.value !== ""){
        tasks.push(input.value)
        addItem()
    }
}   


/**
 * Removes the parent element of an element. It is used to remove an item of the list when the user
 * clicks on the cross.
 * @param {*} element 
 */
function removeParentItem(element){
        $(element).parent().remove();
}

