function Arrow() {
   this.x = 637,
      this.y = 23,
      this.lockX = 660,
      this.lockY = 470,
      this.w = 38;

   this.display = function() {
         push();
         image(arrow, this.lockX, this.lockY);
         pop();
      },
      this.hover = function() {
         //ground
         push();
         image(arrow2, this.lockX, this.lockY);
         pop();
      },
      this.none = function() {
         push();
         fill(255, 240, 230);
         noStroke();
         rect(this.lockX, this.lockY, this.w, this.w);
         pop();
      }
}