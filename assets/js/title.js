var title = "Cypress Bay Computer Science"
var count = 1;

function salvador() {
    document.getElementById("funstuff").style.width = "1%"; 
  document.getElementById("funstuff").style.transition = "width 1.5s";
  setTimeout(armand, 10);
}

function armand() {
  document.getElementById("funstuff").style.width = "75%"; 
  setTimeout(aleguas, 150);
}
//i like the title but make it go faster there its faster BTW the text box thing is gone
function aleguas() {
  let IV = title.substring(0, count);
  document.getElementById("funstuff").innerHTML = IV;
  count = count + 1;
  setTimeout(aleguas, 50);
}