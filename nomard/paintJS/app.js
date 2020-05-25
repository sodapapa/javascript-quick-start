const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.width=400;
ctx.height=400;

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{          
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}       

function onMouseUp(event){

    stopPainting()
}



if(canvas){

    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);    
    canvas.addEventListener("mouseleave", stopPainting);
}