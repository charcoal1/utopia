function Tree() {
  this.x = 640,
  this.y = 140;
  
  this.rollover = function() {
    push();
    //scene1TreeOn.resize(80, 102); //resize trees
    //scene1TreeOff.resize(80, 102);
    translate(this.x, this.y);
    if (s1TextFinished) {
      if (mouseX > this.x && mouseX < this.x + 75 && mouseY > this.y && mouseY < this.y + 102) {
        //translate(550, 140);
        //scene1Tree.resize(100, 102);
        image(scene1TreeOn, 0, 0);
      } else {
        //translate(550,140);
        image(scene1TreeOff, 0, 0);
      }
    } else {
      image(scene1TreeOff, 0, 0);
    }
    pop();
  },
  this.click = function() {
    if (s1TextFinished === true) {
      if (mouseIsPressed && (mouseX > this.x && mouseX < this.x + 75 && mouseY > this.y && mouseY < this.y + 102)) {
        scene = 4; // change to scene 2
      } else {}
    }
  }
}