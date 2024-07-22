const input =document.querySelector(".input-box")
const button =document.querySelector(".add-button")
const todoList =document.querySelector(".todo-list")

button.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTode);

function addTodo(event){
    event.preventDefault();

    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoItem =document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText=input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton =document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML ='<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    const completeBUtton=document.createElement("button");
    completeBUtton.classList.add("complete-btn");
    completeBUtton.innerHTML='<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeBUtton);

    todoList.appendChild(todoDiv);
    input.value="";
}

function deleteTode(event){
    const item= event.target;
    if(item.classList[0] === "delete-btn"){
        const delItem =item.parentElement;
        delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const delItem =item.parentElement;
        delItem.classList.toggle("completed");
    }
}