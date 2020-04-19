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
