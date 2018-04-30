
function randomBoard() {
  for (var i=0; i<81; i++) {
   var color = Math.floor(Math.random()*16777215).toString(16);
   var check = document.createElement('div');
             check.style.backgroundColor = '#'+ color;
             check.style.width = '11%';
             check.style.paddingBottom = '11%';
             check.style.float = 'left';
             document.body.appendChild(check);
   }

}

randomBoard();
setInterval(removeBoard, 2000);

function removeBoard() {
  var myNodelist = document.querySelectorAll('div');
  var j;
  for (j = 0; j < myNodelist.length; j++) {
   document.body.removeChild(myNodelist[j]);
  }
  randomBoard();
}
