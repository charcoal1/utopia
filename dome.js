function Dome() {
  this.x = 190,
  this.y = 90;
  
  this.display = function() {
    push();
    fill(255);
    translate(this.x, this.y);
    //rotate(mouseX*0.01);
    /*     // Dome Shape Vector
     beginShape();
     line(0, 0, 280, 0);
     bezier(0, 0, 9, -167, 262, -181, 280, 0);
     endShape(CLOSE);
     */
    //scene1DomeOn.resize(300, 175);
    //scene1DomeOff.resize(300, 175);
    image(scene1DomeOff, 0, 0);
    pop();
  },
  this.rollover = function() {
    if (s1TextFinished) {
      if (mouseX > this.x && mouseX < this.x + 300 && mouseY > this.y + 8 && mouseY < this.y + 175) { //greater than 80 or 72
        translate(this.x, this.y);
        image(scene1DomeOn, 0, 0);
        /*if (mousePressed) {
         scene = 5;
         } else {
         }
         */
      } else {}
    }
  },
  this.click = function() {
    if (s1TextFinished === true) {
      if (mousePressed && (mouseX > this.x && mouseX < this.x + 300 && mouseY > this.y + 8 && mouseY < this.y + 175)) {
        //background(255, 0, 0);
        scene = 5; // change to scene 2
      } else {}
    }
  }
}