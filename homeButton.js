function HomeButton() {
   //HomeButton style
   this.rStroke = 0, //home button outside Color
      this.gStroke = 10,
      this.bStroke = 150,
      this.rInt = 0, //home button inside Color
      this.gInt = 70,
      this.bInt = 255,
      this.x = 627, //width 720-93 = 627
      this.y = 10,
      this.w = 80,
      this.h = 35;

   this.display = function() {
         push();
         translate(this.x, this.y);
         fill(this.rInt, this.gInt, this.bInt);
         strokeWeight(3);
         stroke(this.rStroke, this.gStroke, this.bStroke);
         rect(0, 0, this.w, this.h);
         fill(0);
         noStroke();
         textFont(futuraBold);
         textSize(20);
         text("HOME", 8, 25);
         pop();
      },
      this.rollover = function() {
         push();
         if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.rInt = 0; //presssed
            this.gInt = 70;
            this.bInt = 255;
            if (mouseIsPressed) {
               //background(255, 0, 0);
               scene = 1; // change to home nav
            } else { // rollover
               this.rInt = 10;
               this.gInt = 170;
               this.bInt = 255;
            }
         } else { // normal. no rollover or press
            this.rInt = 10;
            this.gInt = 230;
            this.bInt = 255;
         }
         pop();
      }
}