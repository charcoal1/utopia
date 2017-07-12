function Car() {
  this.x = 360,
  this.y = 320;
  
  this.display = function() {
    //scene1CarOff.resize(300, 150);
    //scene1CarOn.resize(300, 150);
    push();
    translate(this.x, this.y - 22);
    if (s1TextFinished) {
      if (mouseX > this.x && mouseX < this.x + 300 && mouseY > this.y && mouseY < this.y + 150) {
        image(scene1CarOn, 0, 0);
        /*if (s1TextFinished == true) {    // mouseover text for car NIL?
         s1TextNum=12;
         aArrow.none();
         } else {
         s1TextNum = 10;
         }*/
      } else {
        //translate(carX, carY-22);
        image(scene1CarOff, 0, 0);
      }
    } else {
      image(scene1CarOff, 0, 0);
    }
    pop();
  },
  this.click = function() {
    if (s1TextFinished === true) {
      if (mouseIsPressed && (mouseX > this.x && mouseX < this.y + 300 && mouseY > this.y && mouseY < this.y + 150)) {
        //background(255, 0, 0);
        scene = 2; // change to scene 2
      } else {}
    }
  }
}