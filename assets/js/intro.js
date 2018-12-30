function addMainBox(){
  var added = document.createElement("textarea");
  var row = document.createAttribute("cols");
  var col = document.createAttribute('rows');
  var id = document.createAttribute('id');
  var t = document.createTextNode("RESIZE");       
  row.value = "num";
  col.value = "num";
  id.value = "bigbox";
  added.setAttributeNode(row);
  added.setAttributeNode(col);
  added.setAttributeNode(id);
  added.appendChild(t); 
  document.getElementById("fadeout").innerHTML = "";
  
  document.getElementById("fadein").appendChild(added);
  document.getElementById("bigbox").style.transition = "all .3s";
  setTimeout(doStuff, 10);
}

function doStuff() {
  document.getElementById("bigbox").style.width = "85%";
  document.getElementById("bigbox").style.height = "50%";
}




