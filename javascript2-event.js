
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var status = section.querySelector(".status");
    var container = section.querySelector(".container");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;
    section.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;    
            offset.x = e.offsetX;       
            offset.y = e.offsetY;           

        }                
    }; 
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var status = section.querySelector(".status");
    var container = section.querySelector(".container");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;
    section.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;    
            offset.x = e.offsetX;       
            offset.y = e.offsetY;           

        }                
    };      
    section.onmouseup = function(e){      
        dragging = false;
                         
     };    

     section.onmousemove = function(e){
        if(!dragging) return;
        dragging = true;                    

        var x =  e.pageX-offset.x-left+"px";
        var y = e.pageY-offset.y+-top+"px";                 
        current.style.left = e.pageX-offset.x-left+"px";
        current.style.top = e.pageY-offset.y+-top+"px";      
                                    
        status.innerText = "(x , y) " + x +", " + y;
     };         


});

window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var box = section.querySelector(".box");
    var container = section.querySelector(".container");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;    
            offset.x = e.offsetX;       
            offset.y = e.offsetY;

        }                
    };      
    container.onmouseup = function(e){      
        dragging = false;
                         
     };    

    container.onmousemove = function(e){
        if(!dragging) return;
        dragging = true;
        current.style.left = e.x-offset.x+"px";
        current.style.top = e.y-offset.y+"px";      

     };         

     box.onmousedown = function(e){

     }
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var box = section.querySelector(".box");
    var container = section.querySelector(".container");
    var dragging = false;
    var offset = {x:0, y:0};
    
    container.onmousedown = function(e){
        if(e.target === box)
            dragging = true;
                        
    };      
    container.onmouseup = function(e){      
        dragging = false;
                         
     };    

    container.onmousemove = function(e){
        if(!dragging) return;
        dragging = true;
        box.style.left = e.x-offset.x+"px";
        box.style.top = e.y-offset.y+"px";      

     }; 

     box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
     }
});


window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var box = section.querySelector(".box");
    var container = section.querySelector(".container");

    container.onclick = function(e){
        console.log('_____________________________')
       console.log("e.x, e.y "+ e.x +  ","+ e.y);
       console.log("client e.x, e.y "+ e.clientX +  ","+ e.clientY);
       console.log("page e.x, e.y "+ e.pageX +  ","+ e.pageY);
       console.log("offset e.x, e.y "+ e.offsetX +  ","+ e.offsetY);

       box.style.position = "absolute";
       box.style.left = e.x+"px";
       box.style.top = e.y+"px"; 
                        
    };      
});     


window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function(){

        var event = new MouseEvent("click",{    
            'view' : window,
            'bubbles' : true,
            'cancelable' : true
        });
        fileButton.dispatchEvent(event)
    };
});     



// Ex3-이벤트 버블링 멈추기
// 같은 부모를 공유하지만 다른 이벤트를 수행해야하는 경우에 어떻게 이벤트를 막을 것인가.

window.addEventListener("load", function(){

    var section = document.querySelector("#section3");
    
    var imgList = section.querySelector(".img-list"); 
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    var tbody = section.querySelector('.notice-list tbody');
        
    tbody.onclick = function(e){
        console.log(e.target.nodeName);
        if(e.target.nodeName != "INPUT") return;

        var target = e.target;
        if(target.classList.contains("sel-button")){
            var tr = target.parentElement;

            for(; tr.nodeName != "TR"; tr= tr.parentElement)

            tr.style.background = "blue"; 
        }
    }


}); 



// Ex3-이벤트 버블링 멈추기
// 같은 부모를 공유하지만 다른 이벤트를 수행해야하는 경우에 어떻게 이벤트를 막을 것인가.

window.addEventListener("load", function(){

    var section = document.querySelector("#section3");
    
    var imgList = section.querySelector(".img-list"); 
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        console.log('imgList.onclick');  
        if(e.target.nodeName != "IMG")  return

        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){        
        e.stopPropagation(); 
        console.log('addButton.onclick');
        var img = document.createElement('img');
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    
    };

}); 





//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function(){

    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list"); 
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
      console.log(e.target.nodeName);  
      if(e.target.nodeName != "IMG")  return

      currentImg.src = e.target.src;
    };
}); 


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var buttons = section.querySelectorAll('input[type=button]')
    var tbody = section.querySelector('tbody');

    tbody.onclick = function(e){
        console.log(e.target.nodeName);
        if(e.target.nodeName != "INPUT") return;

        e.target.parentElement.parentElement.remove();       

    }

    // for(var i = 0; i<buttons.length; i++){

    //     buttons[i].onclick = function(event){
    //         event.target.parentElement.parentElement.remove();       
    //     }          
    // }            

}); 



//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
    for(var i = 0; i<imgs.length; i++){

        imgs[i].onclick = function(event){
            currentImg.src=event.target.src;       

        }
    }              
        
}); 