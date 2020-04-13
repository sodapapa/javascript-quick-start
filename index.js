//window.onload = function(){

window.addEventListener("load", function(){
  var btnPrint = document.getElementById('btn-print')

  btnPrint.onclick = function() { // 익명함수
    var x , y;
    // var btnPrint = document.getElementById('btn-print')

    x = prompt("insert x",0);
    y = prompt("insert y",0);

    // 입력된 값을 문자열로 저장한다.

    x = parseInt(x);
    y = parseInt(y);

    btnPrint.value = x+y;
  }

})
