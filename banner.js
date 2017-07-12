function Banner() {
  this.display = function() {
    push();
    fill(255, 240, 230);
    stroke(0, 0, 255);
    translate(15, 463);
    rect(0, 0, 690, 51, 10);
    pop();
  }
}