const todoList=[{
    name:'make dinner',
    dueDate:'2022-12-22'
}];
renderTodoList();
function renderTodoList(){

    let todolistHtml='';
    for(let i=0; i<todoList.length; i++){
    const todoObject=todoList[i];
    // const name=todoObject.name;
    const {name,dueDate}=todoObject;
    // const dueDate=todoObject.dueDate;
    // const {dueDate}=todoObject;
    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-todo">Delete</button>
    `;
    todolistHtml+=html;
    }
    
    document.querySelector('.js-todo-button').innerHTML=todolistHtml;
}

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