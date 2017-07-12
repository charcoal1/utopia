function playButton() {
   this.x = 312,
   this.y = 340,
   this.w = 85,
   this.h = 35,
   
   this.rI = 0,
   this.gI = 70,
   this.bI = 255,
   
   this.rStroke = 0,
   this.gStroke = 10,
   this.bStroke = 100;

   this.display = function() {
      push();
      translate(this.x, this.y);
      fill(0, 155, 255);
      strokeWeight(3);
      stroke(this.rStroke, this.gStroke, this.bStroke);
      rect(0, 0, this.w, this.h);
      fill(0);
      noStroke();
      textSize(20);
      textFont(futuraBold);
      text("BEGIN", 10, 25);
      pop();
   }
   this.rollover = function() {

      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
         this.rI = 0; //presssed
         this.gI = 70;
         this.bI = 255;
         if (mouseIsPressed) {
            //background(255, 0, 0);
            scene = 1; // change to homeButton. nav
         } else { // rollover
            this.rI = 10;
            this.gI = 170;
            this.bI = 255;
         }
      } else { // normal. no rollover or press
         this.rI = 10;
         this.gI = 230;
         this.bI = 255;
      }

   }

}