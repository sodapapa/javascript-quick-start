const body = document.querySelector('body');
const IMG_NUMBER = 4;

function paintImage(number){
    const image = new Image();
    image.src = `images/${number +1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}               

function getRandomNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER );

    return number;
}

function init(){        
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    paintImage(randomNumber);
}

init();