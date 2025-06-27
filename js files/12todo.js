const todoList=[];
renderTodoList();
function renderTodoList(){

    let todolistHtml='';

    todoList.forEach((todoObject,index)=>{
const {name,dueDate}=todoObject;
    // const dueDate=todoObject.dueDate;
    // const {dueDate}=todoObject;
    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button  class="delete-todo js-delete-todo-button">Delete</button>
    `;
    todolistHtml+=html;
    });

    
    document.querySelector('.js-todo-button').innerHTML=todolistHtml;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton,index)=>{  deleteButton.addEventListener('click',()=>{todoList.splice(index,1);
    renderTodoList();})

        });
}

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo()
})


function addTodo(){
const inputElement=document.querySelector('.js-name-input');
const name=inputElement.value;

const dateInputElement=document.querySelector('.js-due-date-input');
const dueDate=dateInputElement.value;

todoList.push({
    // name:name,
    // dueDate:dueDate,
    name,
    dueDate
});

  // name:name,
    // dueDate:dueDate,
inputElement.value='';
renderTodoList();
}