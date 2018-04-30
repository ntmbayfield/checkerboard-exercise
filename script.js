
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
         color = `rgb(0, ${255-(i*2)}, ${i*2})`;
         tile = makeTile(color)
         document.body.appendChild(tile);
       } else {
           color = `rgb(${i*2}, 0, 0)`;
           tile = makeTile(color)
           document.body.appendChild(tile);
       }  //closes else statement
   }      //closes for loop
 }        //closes createCheckerBoard function

 createCheckerBoard(81);
