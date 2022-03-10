//SELECTORS
const todoInput = document.querySelector('#todo-input');
const addTodoBtn = document.querySelector('#add-todo-button');
const todoContainer = document.querySelector('.list-container ul');
const todoDiv = document.querySelector('.todo-list')

//EVENT LISTENERS
addTodoBtn.addEventListener('click', addTodo);
todoContainer.addEventListener('click', deleteCheck);

//FUNCTIONS
function addTodo(event) {
    //Prevents the form from submitting
    event.preventDefault();
    if(todoInput.value == "" || todoInput.value == null) {
        event.preventDefault();
        return;
    }

    //Creating my to do list items
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-list')
    todoContainer.appendChild(todoDiv)
    
    let listItem = document.createElement('li')
    listItem.innerText = todoInput.value
    todoDiv.appendChild(listItem)

    //CREATING BUTTON :{DELETE}
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete-button')
    todoDiv.appendChild(deleteBtn)
    //CREATING BUTTONS: {CHECK}
    let checkBtn = document.createElement('button');
    checkBtn.innerText = "Check";
    checkBtn.classList.add('check-button');
    todoDiv.appendChild(checkBtn);

    todoInput.value = "";
}

function deleteCheck(e) {
    //DELETE ITEM
    const item =  e.target;
    if(item.classList[0] === 'delete-button') {
        const todo = item.parentElement;
        todo.classList.add('delete');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
        
    }

    //CHECK ITEM
    if(item.classList[0] === 'check-button') {
        const todo = item.parentElement;
        todo.classList.toggle('check')
    }
}