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
