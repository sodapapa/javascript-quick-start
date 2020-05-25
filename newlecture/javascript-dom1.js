//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function(){

  var notices = [
      {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
      {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
      {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
      {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
  ];

  var section = document.querySelector("#section10");
  
  var noticeList =section.querySelector(".notice-list");
  var titldTd = section.querySelector(".title");
  var tbodyNode = noticeList.querySelector("tbody");
dysdfkjhehdhdshsduiheisididi
  var bindData = function(){
      var template = section.querySelector("template");

      for(var i=0; i<notices.length; i++){
          var cloneNode = document.importNode(template.content, true);
          var tds = cloneNode.querySelectorAll("td");
          tds[0].textContent = notices[i].id;            

          var aNode = tds[1].children[0];
          aNode.href=notices[i].id;
          aNode.textContent = notices[i].title;

          tds[2].textContent = notices[i].regDate;
          tds[3].textContent = notices[i].writerId;
          tds[4].textContent = notices[i].hit;

          tbodyNode.appendChild(cloneNode);
      }
  };

  bindData();

  var titleSorted = false;

  titldTd.onclick = function(){
    tbodyNode.innerHTML ="" ;

    if(!titleSorted){
      
      titleSorted = true;
      notices.sort(function(a, b){
        if(a.title < b.title)
          return -1
        
        else if(a.title > b.title)
          return 1
  
        else
          return 0
      })
      
    }else{
      
      notices.reverse();
    }
      
      bindData();
    };


});


//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function(){

  var section = document.querySelector("#section9");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbody = noticeList.querySelector("tbody");
  var allCheckbox = section.querySelector(".overall-checkbox");
  var delButton = section.querySelector(".del-button");
  var swapButton = section.querySelector(".swap-button");

  allCheckbox.onchange = function(){

    var inputs = tbody.querySelectorAll("input[type='checkbox']")
    
    for(var i = 0; i < inputs.length; i++){   
      inputs[i].checked = allCheckbox.checked;
    }    
    
  };

  delButton.onclick = function(){
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked")

    for(var i = 0; i < inputs.length; i++)
      inputs[i].parentElement.parentElement.remove();    

  };

  swapButton.onclick = function(){
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked")
       
    if(inputs.length != 2){
      alert('2개만 선택해야함');
      return;   
    }                   

    var trs = [];
    for(var i = 0; i < inputs.length; i++)
      trs.push (inputs[i].parentElement.parentElement);

    var cloneNode = trs[0].cloneNode(true);

    trs[1].replaceWith(cloneNode);
    trs[0].replaceWith(trs[1]);   
      
  };

});
            

//Ex8-노드 삽입과 바꾸기
window.addEventListener("load", function(){

  var section = document.querySelector("#section8");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbodyNode = noticeList.querySelector("tbody");
  var upButton = section.querySelector(".up-button");
  var downButton = section.querySelector(".down-button");

  var currentNode = tbodyNode.firstElementChild;//.children[0];
  
  downButton.onclick = function(){
    var nextNode =  currentNode.nextElementSibling;
    
    if(nextNode == null ){
      alert('더이상 이동할 수 없습니다.');
      return;     
    }

    // tbodyNode.removeChild(nextNode);    
    // tbodyNode.insertBefore(nextNode,currentNode);
    currentNode.insertAdjacentElement("beforebegin",nextNode)
  };

  upButton.onclick = function(){
    var prevNode =  currentNode.previousElementSibling;
    
    if(prevNode == null ){    
      alert('더이상 이동할 수 없습니다.');
      return;     
    }   

    // tbodyNode.removeChild(currentNode);       
    // tbodyNode.insertBefore(currentNode, prevNode); 
    currentNode.insertAdjacentElement("afterend",prevNode);
  };

});


//Ex7 : 노드 복제와 템플릿 태그
window.addEventListener("load", function(){
  var notices = [
      {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
      {id:6, title:"나 좀 복제해줘~", regDate:"2019-01-26", writerId:"newlec", hit:17}
  ];

  var section = document.querySelector("#section7");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbodyNode = noticeList.querySelector("tbody");
  var cloneButton = section.querySelector(".clone-button");
  var templateButton = section.querySelector(".template-button");

  cloneButton.onclick = function(){
    var trNode =   noticeList.querySelector('tbody tr');
    var cloneNode = trNode.cloneNode(true);
    var tds = cloneNode.querySelectorAll('td');
    tds[0].textContent = notices[0].id;   
    tds[1].innerHTML = '<a href ="'+notices[0].id+'">' + notices[0].title + '</a>';
    tds[2].textContent = notices[0].regDate;
    tds[3].textContent = notices[0].writerId;
    tds[4].textContent = notices[0].hit;
    tbodyNode.append(cloneNode);
  };

  templateButton.onclick = function(){
      
    console.log(notices.length); 
    
    var template = section.querySelector('template');

    for (let i = 0; i < notices.length; i++) {
      var cloneNode = document.importNode(template.content, true);
      var tds = cloneNode.querySelectorAll('td');
        //  const element = array[index];

        tds[0].textContent = notices[i].id;   
        // tds[1].innerHTML = '<a href ="'+notices[0].id+'">' + notices[0].title + '</a>';
    
        aNode = tds[1].children[0];   
        aNode.href = notices[i].id;
        aNode.textContent = notices[i].title
        tds[2].textContent = notices[i].regDate;
        tds[3].textContent = notices[i].writerId;
        tds[4].textContent = notices[i].hit;
        tbodyNode.append(cloneNode);
      }
  };

});


//    ex 5: 엘리먼트 노드의 속성& CSS 속성 변경
window.addEventListener('load', function(){
  var section = document.querySelector('#section5');
  var box = section.querySelector(".box")
  // var input1 = box.childNodes[0]
  // var input2 = box.childNodes[1];
  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hi";    
  input2.value = "hi2";
});

//   Ex4 : child nodes를 이용한 노드 선택
window.addEventListener('load', function(){
  var section4 = document.querySelector('#section4');
  var box = section4.querySelector(".box")
  // var input1 = box.childNodes[0]
  // var input2 = box.childNodes[1];
  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hi";
  input2.value = "hi2";
});
//  Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener('load', function(){
  var section2 = document.getElementById('section2');
  var inputs = document.getElementsByTagName('input');

  var txtY = inputs[0];
  var txtY = inputs[1];
  var btnAdd =inputs[2];
  var txtResult = inputs[3];


  btnAdd.onclick = function(){
    console.log('add');
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtResult.value = x + y;
  }
})



window.addEventListener('load', function(){
  var txtX = document.getElementById('txt-x');
  var txtY = document.getElementById('txt-y');
  var btnAdd = document.getElementById('btn-add');
  var txtResult = document.getElementById('txt-result');


  btnAdd.onclick = function(){
    console.log('add');
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtResult.value = x + y;
  }
})
