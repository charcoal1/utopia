function Tester() {
   this.x = 312;
   this.y = 340;
   this.w = 85;

   this.display = function() {
         push();
         translate(this.x, this.y);
         fill(0);
         rect(0, 0, 100, 100);
         pop();
      }
      /*
  this.rollover = function() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + homeButton.h) {
      homeButton.rI = 0; //presssed
      homeButton.gI = 70;
      homeButton.bI = 255;
      if (mousePressed) {
        //background(255, 0, 0);
        scene = 1; // change to homeButton. nav
      } else { // rollover
        homeButton.rI = 10;
        homeButton.gI = 170;
        homeButton.bI = 255;
      }
    } else { // normal. no rollover or press
      homeButton.rI = 10;
      homeButton.gI = 230;
      homeButton.bI = 255;
    }
    
  }
*/
}