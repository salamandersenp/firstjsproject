const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('.list-group');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1]
const filter = document.querySelector('#filter')
const clearButton = document.querySelector('#clear-todos')

eventListeners()
 
function eventListeners(){
    form.addEventListener('submit',addTodo)  
    document.addEventListener('DOMContentLoaded',loadAllTodosToUI)
    secondCardBody.addEventListener('click',deleteTodo)  
    clearButton.addEventListener('click',clearAllTodos)
}

function clearAllTodos(e){
    if (confirm('Are you sure to delete all tasks?')){
        todoList.innerHTML = ''
    }

}

function deleteTodo(e){
    if (e.target.className === 'fa fa-remove'){
        e.target.parentElement.parentElement.remove()
        showAlert('info','Todo deleted!')
        
    }

}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage()
    todos.forEach(function(todo){
        addTodoToUI(todo)        
    })
}

function addTodo(e){
    const newTodo = todoInput.value.trim() 

    if (newTodo === ''){
        showAlert('danger','Oops,try again please.')
    }
    else{
        addTodoToUI(newTodo)
        showAlert('success','Succesfully saved!')

    }

    e.preventDefault()
}

function showAlert(type,message){
    const alert = document.createElement('div')

    alert.className = `alert alert-${type}`
    alert.textContent = message
    

    firstCardBody.appendChild(alert)

    setTimeout(function(){
        alert.remove()
    },1400)
}

function addTodoToUI(newTodo){
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#'
    link.className = 'delete-item'
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    listItem.className = 'list-group-item d-flex justify-content-between'
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)
    todoList.appendChild(listItem)    
}



