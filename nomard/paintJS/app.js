const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');


const defaultColor =  "#2c2c2c";


canvas.width = 400;
canvas.height = 400;       


ctx.fillStyle = "white";
ctx.fillRect(0,0,700,700);      
ctx.strokeStyle = defaultColor;
ctx.fillStyle = defaultColor;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;        


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
    ctx.fillStyle = color;   
}

function handleRangeChange(event){      
    const value =  event.target.value;   
    ctx.lineWidth =  value;
}               

function handleModeClick(){
    if(filling == true){
        filling = false;
        mode.innerText = "Paint"
        
    }else{
        filling = true;     
        mode.innerText = "Fill"
        
    }
}

function handleCanvasClick(){
    if(filling == true){
        ctx.fillRect(0,0,700,700);
    }               
}

function handleCM(event){
    console.log(event);
    event.preventDefault(); 

}

function handleSaveBtn(){
    const image = canvas.toDataURL("image/jpeg");
    console.log(image);
    const link = document.createElement("a");
    link.href  = image; 
    link.download  = "paint-js";
    link.click();
}
        
if(canvas){

    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);    
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

console.log(Array.from(colors));

Array.from(colors).forEach( color => color.addEventListener('click', handleColorClick))



if(range){
    range.addEventListener("input", handleRangeChange)
}

if(mode){

    mode.addEventListener("click", handleModeClick);
}

if(jsSave){

    jsSave.addEventListener("click", handleSaveBtn);    
}