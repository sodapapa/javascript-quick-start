const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

       
function saveName(text){
    localStorage.setItem(USER_LS,text);     
}

function handelSubmit(event){
    event.preventDefault();
    const currnetValue = input.value;
    console.log(currnetValue);
    paintGreeting(currnetValue);
    saveName(currnetValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handelSubmit);
}       


function paintGreeting(text){
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN)       
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentName = localStorage.getItem(USER_LS);
    console.log(currentName);
    if(currentName === null){
        askForName();
    }else{
        paintGreeting(currentName);
    }
}
function init(){
    loadName();
}

init();