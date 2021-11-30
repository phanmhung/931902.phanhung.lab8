function add() {
  var buttonAdd = document.getElementById("addb");
  var elementdiv = document.createElement("div");
  elementdiv.className = "allinput";

  var input1= document.createElement("input");
  var input2= document.createElement("input");
  var buttonUp= document.createElement("button");
  var buttonDown= document.createElement("button");
  var buttonDel= document.createElement("button");

  buttonUp.onclick = function(){
    if(this.parentNode.previousElementSibling)
    this.parentNode.after(this.parentNode.previousElementSibling);
  }

  buttonDown.onclick = function(){
    if(this.parentNode.nextElementSibling && this.parentNode.nextElementSibling!=buttonAdd)
    this.parentNode.before(this.parentNode.nextElementSibling);
  }

  buttonDel.onclick = function(){
   this.parentNode.remove();
  }

  buttonUp.innerHTML ="↑";
  buttonDown.innerHTML ="↓";
  buttonDel.innerHTML ="x";
  
  elementdiv.append(input1);
  elementdiv.append(input2);
  elementdiv.append(buttonUp);
  elementdiv.append(buttonDown);
  elementdiv.append(buttonDel);
  buttonAdd.before(elementdiv);
}

function save(){
  var allinput= document.querySelectorAll('.allinput');
  var output= document.getElementById('output');

  var x = '{';
  for(var i=0, max=allinput.length; i < max; i++){
    var item = allinput[i].querySelectorAll("input");
    x += '"';
    x += item[0].value ;
    x += '":"';
    x += item[1].value ;
    x += '"';
    if(i!=max-1) x+=' , ';
  }
  x +='}';
  output.innerHTML =x;
}
