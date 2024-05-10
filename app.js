const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todobtn');
const todoList = document.querySelector('.todolist');
const filteroption = document.querySelector('.filter');

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', addRemove);
filteroption.addEventListener('click',filterfunc);

function addTodo(event){
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // CHECK MARK
    const compleatedButton = document.createElement('button');
    compleatedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    compleatedButton.classList.add("compleate-btn");
    todoDiv.appendChild(compleatedButton);

    //TRASh
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TODO LIST
    todoList.appendChild(todoDiv);
    
    //clear too input value
    todoInput.value = "";
}

function addRemove(e){
    const item = e.target
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "compleate-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// function filterfunc(x){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(x.target.value){
//             case "all":
//                 todo.style.display = 'block';
//                 break;
//             case "compleated":
//                 if(todo.classList.contains('completed')){
//                     todo.style.display ='flex';

//                 }
//                 else{
//                     todo.style.display = 'none';
//                 }
//         }
//     });

// }

function filterfunc(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
