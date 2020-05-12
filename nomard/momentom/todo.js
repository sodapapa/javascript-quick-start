const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');


    const TODOS_LS = 'toDos';
    let toDos = [];



    

function deleteToDo(event){
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = event.target.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    // console.log(cleanToDos);
    saveTodos();
}
function saveTodos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));

}

function paintToDo(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement('span');
    const newId = toDos.length + 1
    li.id = newId;
    delBtn.innerText = "X";
    delBtn.addEventListener('click',deleteToDo)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    const todoObj = {
        text : text,
        id : newId
    }

    toDos.push(todoObj);
    saveTodos();
}

function handelSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = "";
    paintToDo(currentValue);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        console.log(loadedToDos);
        console.log(JSON.parse(loadedToDos));
        const parseTodos = JSON.parse(loadedToDos);
        parseTodos.forEach(function(toDo){
            console.log(toDo.text);
            paintToDo(toDo.text);
        });    

    }   
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handelSubmit);
}

init();