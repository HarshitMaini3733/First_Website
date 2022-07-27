var start;
var clicked;

window.unload = showsqr();

function sqr(){
  document.getElementById('square').style.display = 'none';
  clicked = Date.now();
  var reaction=(clicked-start)/1000;
  document.getElementById('para').innerHTML = ('Your reaction time is : ' + reaction);
  var delay = ((Math.random())*3)*1000;
  setTimeout(showsqr,delay);
}
function showsqr(){
  var top = Math.random()*400;
  var left = Math.random()*300;
  var height = (Math.random()*150)+150;
  var width = (Math.random()*150)+150;
  var curve = Math.random();
  var color = "#" + ((1<<24)*Math.random() | 0).toString(16);
  if(curve<0.5){
    document.getElementById('square').style.borderRadius='25%';
  }
  else{
    document.getElementById('square').style.borderRadius='50%';
  }
  document.getElementById('square').style.top = top+'px';
  document.getElementById('square').style.left = left+'px';
  document.getElementById('square').style.height = height+'px';
  document.getElementById('square').style.width = width+'px';
  document.getElementById('square').style.backgroundColor = color;
  document.getElementById('square').style.display='block';
  start = Date.now();
}
