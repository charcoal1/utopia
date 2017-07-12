function Flower() { 
   //x: 20,
   //y: 260,
   this.display= function() {
      push();
      fill(255);
      translate(flowerX, flowerY);
      //scene1FlowerOn.resize(330, 200); // Cannot read resize
      //scene1FlowerOff.resize(330, 200);
      pop();
   },
   this.rollover = function() { 
      push();
      if (s1TextFinished) { // is s1TextFinished?
         if (mouseX > flowerX && mouseX < flowerX + 300 && mouseY > flowerY + 8 && mouseY < flowerY + 175) { //if mouseover, greater than 80 or 72
            translate(flowerX, flowerY);
            image(scene1FlowerOn, 0, 0);
            if (mouseIsPressed) {
               //scene = 5;
            } else {}
         } else {
            translate(flowerX, flowerY);
            image(scene1FlowerOff, 0, 0);
         }
      } else { // if (s1TextFinished) {} else ...
         translate(flowerX, flowerY);
         image(scene1FlowerOff, 0, 0);
      }
      
      pop();
   }
}
