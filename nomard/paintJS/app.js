const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');


canvas.width = 400;
canvas.height = 400;       
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function startPainting(){
    painting = true;
}

function stopPainting(){        
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();                    
        ctx.moveTo(x,y);
    }else{          

        ctx.lineTo(x, y);            
        ctx.stroke();       
    }
}

function onMouseDown(event){
    painting = true;
    console.log(painting);
}       

function onMouseUp(event){

    stopPainting()
}


function handleColorClick(event){
    const color = event.target.style.backgroundColor; 
    ctx.strokeStyle = color;        
}


if(canvas){

    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);    
    canvas.addEventListener("mouseleave", stopPainting);
}

console.log(Array.from(colors));

Array.from(colors).forEach( color => color.addEventListener('click', handleColorClick))