var title = document.getElementById("title");
var subtext = document.getElementById("subtext");
var row = document.getElementById("row");
var desc2 = document.getElementById("desc2");
var desc1 = document.getElementById("desc1");

if(screen.width < 500) {
    title.innerHTML = "Allistair";
    title.classList.add('center');
    subtext.classList.add('invisible');
  } else {
    title.innerHTML = "I'm Allistair";
    title.classList.remove('center');
    subtext.classList.remove('invisible');
  }
  if(screen.width < 770) {
    row.classList.remove('row');
    desc1.classList.add('pb-2');
    desc2.classList.add('pb-2');
  } else {
    row.classList.add('row')
    desc1.classList.remove('pb-2');
    desc2.classList.remove('pb-2');
  }

window.onresize = function(){
  if(screen.width < 500) {
    title.innerHTML = "Allistair";
    title.classList.add('center');
    subtext.classList.add('invisible');
  } else {
    title.innerHTML = "I'm Allistair";
    title.classList.remove('center');
    subtext.classList.remove('invisible');
  }
  if(screen.width < 770) {
    row.classList.remove('row');
    desc1.classList.add('pb-2');
    desc2.classList.add('pb-2');
  } else {
    row.classList.add('row')
    desc1.classList.remove('pb-2');
    desc2.classList.remove('pb-2');
  }
}