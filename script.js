

function makeTile(color) {
  var tile = document.createElement("div");
  tile.style.width = "11.1%";
  tile.style.paddingBottom = "11.1%";
  tile.style.float = "left";
  tile.style.background = color;
  return tile;
}

function createCheckerBoard(numberOfTiles) {
  var tile=null;

  for(var i=0;i<numberOfTiles;i++){
      if (i%2===0){
        color = "black";
        tile = makeTile(color)
        document.body.appendChild(tile);
      } else {
          color = "red";
          tile = makeTile(color)
          document.body.appendChild(tile);
      }  //closes else statement
  }      //closes for loop
}        //closes createCheckerBoard function

createCheckerBoard(81);

//TO CREATE A CHECKERBOARD OF n x n SQUARES
// function addElement (n)  {
//
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       if ((i+j)%2 === 0) {
//         var check = document.createElement('div');
//         document.body.appendChild(check);
//         check.style.width = 100/n + '%';
//         check.style.backgroundColor = '#000000';
//         check.style.paddingBottom = 100/n + '%';
//         check.style.float = 'left';
//       } else {
//         var check = document.createElement('div');
//         document.body.appendChild(check);
//         check.style.width = 100/n + '%';
//         check.style.backgroundColor = 'red';
//         check.style.paddingBottom = 100/n + '%';
//         check.style.float = 'left';
//         }
//       }
//     }
//   }
// addElement(9)
