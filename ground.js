  function Ground() {
     this.display = function() {
        push();
        stroke(0, 170, 20);
        fill(0, 120, 20);
        rect(-15, height / 2.2, width + 30, height);
        pop();
     }
  }