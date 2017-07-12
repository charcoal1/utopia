function Sun() {
  //Sun Rollover
  this.x = 70,
  this.y = 70,
  this.sSize = 100,
  this.drawCircle = true,
  //color
  this.r= 255,
  this.g = 180;
  
  this.display = function() {
    push();
    //rotate(mouseX*0.01);
    translate(0, 0);
    if (this.drawCircle) {
      // with help from:
      // https://forum.processing.org/two/discussion/6633/mouse-over-shapes-code
      // if cursor over circle
      if (mouseX > this.x - this.sSize / 2 && mouseX < this.x + this.sSize / 2 &&
        mouseY > this.y - this.sSize / 2 && mouseY < this.y + this.sSize / 2) {
        sR = 255;
        if (s1TextFinished) {
          sG += 3;
        }
        fill(sR, sG, 0); // if mouseover then lighten color
        /*if (mousePressed) {
          scene = 3;
        }*/
      } else {
        sG = 180;
        fill(255, sG, 0); // else keep same color
      }
    } else {
      //fill(255, sG, 0); //color when mouse is not over
    }
    if (this.drawCircle) {
      // Draw the circle
      stroke(255, 50, 0);
      ellipse(this.x, this.y, this.sSize, this.sSize);
      scene1FaceOff.resize(75, 64);
      image(scene1FaceOff, 33, 39);
    }
    pop();
  },
  this.click = function() {
    if (s1TextFinished === true) {
      if (mouseIsPressed && (mouseX > this.x - this.sSize / 2 && mouseX < this.x + this.sSize / 2 &&
          mouseY > this.y - this.sSize / 2 && mouseY < this.y + this.sSize / 2)) {
        scene = 3; // change to scene 3
      } else {}
    }
  }
}