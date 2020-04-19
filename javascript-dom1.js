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
