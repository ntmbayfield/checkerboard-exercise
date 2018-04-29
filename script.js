//
// function makeTile(color) {
//   var tile = document.createElement("div");
//   tile.style.width = "11.1%";
//   tile.style.paddingBottom = "11.1%";
//   tile.style.float = "left";
//   tile.style.background = color;
//   return tile;
// }
//
// function createCheckerBoard(numberOfTiles) {
//   var tile=null;
//
//   for(var i=0;i<numberOfTiles;i++){
//       if (i%2===0){
//         color = "linearGradient("black", "yellow")";
//         tile = makeTile(color)
//         document.body.appendChild(tile);
//       } else {
//           color = "linearGradient("red", "yellow")";
//           tile = makeTile(color)
//           document.body.appendChild(tile);
//       }  //closes else statement
//   }      //closes for loop
//
// //  document.getElementById("body").style.background = linearGradient("white", "black")
// }        //closes createCheckerBoard function

//createCheckerBoard(81);

//TO CREATE A CHECKERBOARD OF n x n SQUARES
 function addElement (n)  {

   for (var i = 0; i < n; i++) {  //specifies how many rows
     for (var j = 0; j < n; j++) { //specifies how many columns
         for (var alpha = 0.1; j < n; alpha=alpha+ 0.09);
       if ((i+j)%2 === 0) {
         var check = document.createElement('div');
         document.body.appendChild(check);
         check.style.width = 100/n + '%';
           check.style.backgroundColor = rgba (0, 0, 0, alpha);
         //check.style.backgroundColor = '#000000';
         check.style.paddingBottom = 100/n + '%';
         check.style.float = 'left';
       } else {
         var check = document.createElement('div');
         document.body.appendChild(check);
         check.style.width = 100/n + '%';
         check.style.backgroundColor = rgba(255, 0, 0, alpha);
         check.style.paddingBottom = 100/n + '%';
         check.style.float = 'left';
         }
       }
     }
   }
 addElement(9)
