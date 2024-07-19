console.log("Hi, glory to Ukraine!!!");
let addButton = document.getElementById("add-button");
let saveButton = document.getElementById("save-button");
let emptyButton = document.getElementById("empty-button");
let clearCompletedButton = document.getElementById("clear-completed-button");
let toDOEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed){
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);

    if(completed){
        toDoItem.classList.add("completed");
    }
    
    toDoItem.appendChild(toDoText);
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("click", toggleToDoItemState);
}

function toggleToDoItemState(){
    if(this.classList.contains("completed"))
    {
        this.classList.remove("completed");
    }
    else{
        this.classList.add("completed");
    }
}

function clearCompleted() {
    let completedItems = toDoList.getElementsByClassName("completed");

    while(completedItems.length > 0){
        completedItems.item(0).remove();
    }
}
clearCompletedButton.addEventListener("click", clearCompleted)

function emptyList (){
    let toDoItems = toDoList.children;
    while(toDoItems.length > 0)
    {
        toDoItems.item(0).remove();
    }
}

emptyButton.addEventListener("click", emptyList);

function saveList(){
    let toDos = [];
    for (let i = 0; i<toDoList.children.length; i++){
        let toDO = toDoList.children.item(i);

        let toDoInfo = {
            'task': toDO.innerText,
            'completed': toDO.classList.contains("completed")
        };
        toDos.push(toDoInfo);

    }
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

saveButton.addEventListener('click', saveList);

function addToDoItem () {
    let itemText = toDOEntryBox.value;
    newToDoItem(itemText, false);
}

addButton.addEventListener("click", addToDoItem);

function loadList(){
    // JSON.stringify => JS object -> JSON
    // JSON.parse => JSON -> JS object
    if (localStorage.getItem("toDos") != null) {
        let toDos = JSON.parse(localStorage.getItem("toDos"));
        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }  
    }
}
loadList();