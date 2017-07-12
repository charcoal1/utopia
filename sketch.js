  //~~ debugging version ~~
  //UTOPIA
  //Point-and-click game
  //Requires internet connection


  var scene = 3; //scene count


  //Font (global)
  function preload() {
     futuraBold = loadFont("assets/futura_bold.ttf")
     futuraBook = loadFont("assets/futura_book.ttf")
        /*
          //images
        // arrow = loadImage("/data/optimized/arrow.png");
        // arrow2 = loadImage("/data/optimized/arrow2.png");
        scene0Color = loadImage("/data/optimized/scene0Color.png");
        // scene1Brick = loadImage("/data/optimized/scene1Brick.png");
        // scene1CarOff = loadImage("/data/optimized/scene1CarOff.png");
        // scene1CarOn = loadImage("/data/optimized/scene1CarOn.png");
        // scene1DomeOff = loadImage("/data/optimized/scene1DomeOff.png");
        // scene1DomeOn = loadImage("/data/optimized/scene1DomeOn.png");
        // scene1FaceOff = loadImage("/data/optimized/scene1FaceOff.png");
        // scene1FlowerOff = loadImage("/data/optimized/scene1FlowerOff.png");
        // scene1FlowerOn = loadImage("/data/optimized/scene1FlowerOn.png");
        // scene1TreeOff = loadImage("/data/optimized/scene1TreeOff.png");
        // scene1TreeOn = loadImage("/data/optimized/scene1TreeOn.png");
        //scene2Brick = loadImage("/data/optimized/scene2Brick.png");
        //scene2CarInside = loadImage("/data/optimized/scene2CarInt.png");
        //scene2CarWheel = loadImage("/data/optimized/scene2CarWheel.png");
        //scene2John = loadImage("/data/optimized/scene2John.png");
        scene4TreeBase = loadImage("/data/optimized/scene4TreeBase.png");
        scene4TreeTop = loadImage("/data/optimized/scene4TreeTop.png");
        scene5Bg = loadImage("/data/optimized/scene5Bg.png");
        scene5Painting = loadImage("/data/optimized/scene5Painting.png");
        scene5Sculpture1 = loadImage("/data/optimized/scene5Sculpture1.png");
        scene5Sculpture1Close = loadImage("/data/optimized/scene5Sculpture1Close.png");
        scene5Sculpture2 = loadImage("/data/optimized/scene5Sculpture2.png");
        */
     utopiaTitle = loadImage("assets/utopiaTitle.png");

     arrow = loadImage("assets/arrow.png");
     arrow2 = loadImage("assets/arrow2.png");

     scene1Brick = loadImage("assets/scene1Brick.png");

     scene1CarOff = loadImage("assets/scene1CarOff.png");
     scene1CarOn = loadImage("assets/scene1CarOn.png");

     scene1DomeOff = loadImage("assets/scene1DomeOff.png");
     scene1DomeOn = loadImage("assets/scene1DomeOn.png");

     scene1FaceOff = loadImage("assets/scene1FaceOff.png");

     scene1FlowerOff = loadImage("assets/scene1FlowerOff.png");
     scene1FlowerOn = loadImage("assets/scene1FlowerOn.png");

     scene1TreeOff = loadImage("assets/scene1TreeOff.png");
     scene1TreeOn = loadImage("assets/scene1TreeOn.png");

     scene2Brick = loadImage("/assets/scene2Brick.png");
     scene2CarInside = loadImage("/assets/scene2CarInt.png");
     scene2CarWheel = loadImage("/assets/scene2CarWheel.png");
     scene2John = loadImage("/assets/scene2John.png");
  }


  // universal
  var home;

  //Text properties
  var textBoxX = 20;
  var textBoxY = 446;
  var textSizeAll = 18;
  var textColor = "#461e00";
  var textX = 10;
  var textY = 50;
  var lead = 24;

  var arrowX = 660;
  var arrowY = 470;
  var arrowW = 38;

  //Scene 0 (with Pete March 15, 2017)
  // Landing Screen PlayButton
  var button;
  //PlayButton style
  var scene0ColorAlpha = 255;

  //Scene 1 
  var s1TextNum = 1; //map

  var backR = 0; //bg
  var backG = 150;
  var backB = 255;
  var flowerX = 20;
  var flowerY = 260;

  // Scene 1
  s1TextNum = 1; //map
  var s1TextFinished = false;

  // Map images
  var scene1FlowerOff;
  var scene1FlowerOn;

  //Map Nav Objects
  var aHomeButton;
  var aBanner;
  var aArrow;

  var aCar;
  var aDome;
  var aGround;
  var aFlower;
  var aSun;
  var aTree;


  //Scene 2
  // Scene 2, car scene variables
  var s2TextNum = 1; //car
  var thetaWheel = 0.0;
  var thetaSpeed = 0.002;

  //Scene 3
  var s3TextNum = 1; // sun


  function setup() {
     //var milliseconds= millis();
     // scene 0 with pete
     button = new playButton();
     //home = new homeButton();


     /*
             var ran = (random(90, 605)); // Is this random syntax?
     */


     //Text display 
     //PASTED ABOVE var lead = 24;
     // Scene 1
     // PASTED ABOVE var s1TextFinished = false;
     var s1Text = "Continue exploring Utopia.";
     var s2Text = "Explore the car.";
     var s3Text = "Here is the sun";
     var s4Text = "Here is the tree";
     var s5Text = "Here is the dome";
     // PASTED ABOVE var s1TextNum = 1; //map
     // PASTED ABOVE var s2TextNum = 1; //car
     // PASTED ABOVE var s3TextNum = 1; // sun
     var s4TextNum = 1; //tree
     var s5TextNum = 1; //
     //map
     aHomeButton = new HomeButton();
     aBanner = new Banner();
     aArrow = new Arrow();

     aCar = new Car();
     aDome = new Dome();
     aFlower = new Flower();
     aGround = new Ground();
     aSun = new Sun();
     aTree = new Tree();


     // Begin IMAGES
     var utopiaTitle;
     var scene0Color;


     /*
         var scene1Brick;
         var scene1TreeOn; //images
         var scene1TreeOff;
         var scene1CarOn;
         var scene1CarOff;
         var scene1DomeOn;
         var scene1DomeOff;
         var scene1FaceOff;
         var scene1FlowerOff; //moved to map images
         var scene1FlowerOn;  //moved to map images

         var scene2CarInside;
         var scene2CarWheel;
         var scene2Brick;
         var scene2John;

         var scene4TreeBase;
         var scene4TreeTop;
         var scene4TreeLeaf;

         var scene5bg;
         var scene5painting;
         var scene5sculpture1;
         var scene5sculpture2;
         var scene5sculpture1close;

         var arrow;
         var arrow2;

         //End images

         // Scene 2, car scene variables
         //var thetaWheel = 0.0;
         //var thetaSpeed = 0.002;

         // Scene 4, Tree scene variables
         var leafX = 100;
         var leafY = 0;
         var thetaLeaf = 0.0;
         var treeDone = false;

         // Scene 5, sun scene variables

     */

     /* // added 'var' to the beginning on May 11, 2017
         //Map Nav Objects
         // (former syntax like 'Car aCar;' etc.)
         var car;
         var dome;
         var flower;
      var ground;
        var sun;
         var tree;

         // CONSTANT variables
         homeButton; //constant
         banner;
         arrow;
         var next = 70; // delay time for next arrow

     */
     createCanvas(720, 530);
     background(255);
     /*
         aHomeButton = new HomeButton(); //syntax?
         arrow = new Arrow();

         aPlayButton = new PlayButton();
         aCar = new Car();
         aDome = new Dome();
         aFlower = new Flower();
         aGround = new Ground();
         aBanner = new Banner();
         aSun = new Sun();
         aTree = new Tree();
     */
  }

  function draw() {

     var milliseconds = millis();
     //println(s1TextNum);
     //println("scene 1 done: "+s1TextFinished);

     //futuraBold = createFont("futura_bold.ttf", 20);
     //futuraBook = createFont("futura_book.ttf", 20);

     if (scene === 0) { // scene 0, title scene, title card
        push();
        background(0, 255, 100);
        imageMode(CENTER);
        image(utopiaTitle, width / 2, (height / 2) - 40);
        fill(0);
        textFont(futuraBook);
        textSize(16);
        textLeading('lead');
        textAlign(CENTER);
        text("Instructions: Navigate the text & explore Utopia.", width / 2, height / 2 + 50);
        text("Developed by Andy Gottschalk", width / 2, height / 2 + 150);
        text("© 2016", width / 2, height / 2 + 170);
        pop();

        push();
        button.display();
        button.rollover();
        pop();

        push();
        //home.display();
        //home.rollover();
        pop();

        //delay(6000);
        //scene =1;
     }
     if (scene == 1) {
        background(255, 0, 0);
        rect(200, 200, 10, 400);

        for (var i = 0; i < height; i++) { //background gradient #1 
           stroke(backG, i, backB);
           line(0, i, width, i);
        }

        s2TextNum = 1; // Reset all scene text to beginning if at nav map (scene 1)
        s3TextNum = 1;
        s4TextNum = 1;
        s5TextNum = 1;

        //Map
        aHomeButton.display();
        aHomeButton.rollover();

        aSun.display();
        aSun.click();
        aGround.display();
        aTree.rollover();
        aTree.click();
        aDome.display();
        aDome.rollover();
        image(scene1Brick, 360 + 22, 320 - 103);
        aCar.display();
        aCar.click();
        aFlower.display();
        aFlower.rollover();

        aBanner.display();
        aArrow.display();
        // soft programming 
        /*
                if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
                   aArrow.hover();
                } else {
                   aArrow.display();
                }
                */
        // end soft programming
        //hard programming
        if (mouseX > arrowX && mouseX < (arrowX + arrowW) && mouseY > arrowY && mouseY < (arrowY + arrowW)) {
           aArrow.hover();
        } else {
           aArrow.display();
        }

        if (s1TextNum === 1) {
           s1Text = "Behind a fiery red river and plots of old houses sits this swath of land.";
        } else if (s1TextNum == 2) {
           s1Text = "Aunt Joyce once called it Utopia.";
        } else if (s1TextNum == 3) {
           s1Text = "She built it decades ago with a commune, but now it sits through quick seasons.";
        } else if (s1TextNum == 4) {
           s1Text = "Under heavy suns in summer months we visit her and she feeds us thick cheeses...";
        } else if (s1TextNum == 5) {
           s1Text = "and sweaty glasses of iced tea, and we ask her questions.";
        } else if (s1TextNum == 6) {
           s1Text = "She tells us about what she built when she was young, when she was an artist.";
        } else if (s1TextNum == 7) {
           s1Text = "She tells us that she made houses, pavared fat lizzards and wiry pubic hair.";
        } else if (s1TextNum == 8) {
           s1Text = "And when we've exhausted her and she starts to fall asleep we run outside.";
        } else if (s1TextNum == 9) {
           s1Text = "And we explore Utopia.";
        } else if (s1TextNum == 10) {
           s1Text = "Use your cursor to explore Utopia and click on the landmarks.";
           s1TextFinished = true;
           arrow.none();
        } else if (s1TextNum == 12) {
           s1Text = "The car's broken down now, but she used to drive it downtown.";
           arrow.none();
        } else if (s1TextNum == 13) {
           s1Text = "Aunt Joyce made the Dome with her artist friends using wood and refuse.";
           arrow.none();
        } else if (s1TextNum == 14) {
           s1Text = "The Sassafrass tree in the field has been around before my aunt was born.";
           arrow.none();
        } else if (s1TextNum == 15) {
           s1Text = "We wear long brimmed hats under this sun, our legs tanned under its dull light.";
           arrow.none();
        } else if (s1TextNum == 16) {
           s1Text = "The flower bed has been miraculously mavarained without anyone to garden it.";
           arrow.none();
        } else {
           s1TextNum = 10;
           s1Text = "Use your cursor to explore Utopia.";
           print("arrived");
        }

        //Rollover text display only if s1TextFinished
        if (s1TextFinished === true) {
           // if CAR
           if (mouseX > Car.x && mouseX < Car.x + 300 && mouseY > Car.y && mouseY < Car.y + 150) {
              s1TextNum = 12;
              arrow.none();
              // if DOME
           } else if (mouseX > Dome.x && mouseX < Dome.x + 300 && mouseY > Dome.y + 8 && mouseY < Dome.y + 175) {
              s1TextNum = 13;
              arrow.none();
              // if TREE
           } else if (mouseX > Tree.x && mouseX < Tree.x + 75 && mouseY > Tree.y && mouseY < Tree.y + 102) {
              s1TextNum = 14;
              arrow.none();
           } else if (mouseX > Sun.x - Sun.sSize / 2 && mouseX < Sun.x + Sun.sSize / 2 &&
              mouseY > Sun.y - Sun.sSize / 2 && mouseY < Sun.y + Sun.sSize / 2) {
              s1TextNum = 15;
              arrow.none();
           } else if (mouseX > Flower.x && mouseX < Flower.x + 300 &&
              mouseY > Flower.y + 8 && mouseY < Flower.y + 175) {
              s1TextNum = 16;
              arrow.none();
           } else {
              s1TextNum = 10;
              arrow.none();
           }
        }

        push(); //text format scene 1
        noStroke();
        translate(textBoxX, textBoxY);
        fill(textColor);
        textFont(futuraBook);
        textSize(textSizeAll);
        textLeading(lead);
        text(s1Text, textX, textY);
        pop();

     } //end scene 1

     /*
     for (var i = 0; i<height; i++) { //background gradient #1
      stroke(backG, i, backB);
      line(0, i, width, i);
      }
      
      
      for (var i = 0; i<height; i++) { //background gradient blue to pink
      stroke(i, backG, backB);
      line(0, i, width, i);
      }
      */
     /*
      for (var i = 0; i < height; i++) { //background gradient blue to pink 2
        stroke(i * 2, i, 200);
        line(0, i, width, i);
      }

      s2TextNum = 1; // Reset all scene text to beginning if at nav map (scene 1)
      s3TextNum = 1;
      s4TextNum = 1;
      s5TextNum = 1;

      //Map
      aGround.display(); // display all classes here
      aDome.display();
      aDome.rollover();
      aDome.click();
      aTree.rollover();
      aTree.click();
      image(scene1Brick, car.x + 22, car.y - 103);
      aFlower.display();
      aFlower.rollover();
      aCar.display();
      aCar.click();
      aSun.display();
      aSun.click();


      arrow.display();
      aBanner.display();


      if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
        arrow.hover();
      } else {
        arrow.display();
      }

      if (s1TextNum == 1) {
        s1Text = "Behind a fiery red river and plots of old houses sits this swath of land.";
      } else if (s1TextNum == 2) {
        s1Text = "Aunt Joyce once called it Utopia.";
      } else if (s1TextNum == 3) {
        s1Text = "She built it decades ago with a commune, but now it sits through quick seasons.";
      } else if (s1TextNum == 4) {
        s1Text = "Under heavy suns in summer months we visit her and she feeds us thick cheeses...";
      } else if (s1TextNum == 5) {
        s1Text = "and sweaty glasses of iced tea, and we ask her questions.";
      } else if (s1TextNum == 6) {
        s1Text = "She tells us about what she built when she was young, when she was an artist.";
      } else if (s1TextNum == 7) {
        s1Text = "She tells us that she made houses, pavared fat lizzards and wiry pubic hair.";
      } else if (s1TextNum == 8) {
        s1Text = "And when we've exhausted her and she starts to fall asleep we run outside.";
      } else if (s1TextNum == 9) {
        s1Text = "And we explore Utopia.";
      } else if (s1TextNum == 10) {
        s1Text = "Use your cursor to explore Utopia and click on the landmarks.";
        s1TextFinished = true;
        arrow.none();
      } else if (s1TextNum == 12) {
        s1Text = "The car's broken down now, but she used to drive it downtown.";
        arrow.none();
      } else if (s1TextNum == 13) {
        s1Text = "Aunt Joyce made the Dome with her artist friends using wood and refuse.";
        arrow.none();
      } else if (s1TextNum == 14) {
        s1Text = "The Sassafrass tree in the field has been around before my aunt was born.";
        arrow.none();
      } else if (s1TextNum == 15) {
        s1Text = "We wear long brimmed hats under this sun, our legs tanned under its dull light.";
        arrow.none();
      } else if (s1TextNum == 16) {
        s1Text = "The flower bed has been miraculously mavarained without anyone to garden it.";
        arrow.none();
      } else {
        s1TextNum = 10;
        s1Text = "Use your cursor to explore Utopia.";
        print("arrived");
      }

      //Rollover text display only if s1TextFinished
      if (s1TextFinished === true) {
        // if CAR
        if (mouseX > car.x && mouseX < car.x + 300 && mouseY > car.y && mouseY < car.y + 150) {
          s1TextNum = 12;
          arrow.none();
          // if DOME
        } else if (mouseX > dome.x && mouseX < dome.x + 300 && mouseY > dome.y + 8 && mouseY < dome.y + 175) {
          s1TextNum = 13;
          arrow.none();
          // if TREE
        } else if (mouseX > tree.x && mouseX < tree.x + 75 && mouseY > tree.y && mouseY < tree.y + 102) {
          s1TextNum = 14;
          arrow.none();
        } else if (mouseX > sun.x - sun.sSize / 2 && mouseX < sun.x + sun.sSize / 2 &&
          mouseY > sun.y - sun.sSize / 2 && mouseY < sun.y + sun.sSize / 2) {
          s1TextNum = 15;
          arrow.none();
        } else if (mouseX > flower.x && mouseX < flower.x + 300 &&
          mouseY > flower.y + 8 && mouseY < flower.y + 175) {
          s1TextNum = 16;
          arrow.none();
        } else {
          s1TextNum = 10;
          arrow.none();
        }
      }

      push(); //text format scene 1
      translate(textBoxX, textBoxY);
      fill(textColor);
      textFont(futuraBook);
      textSize(textSizeAll);
      textLeading(lead);
      text(s1Text, textX, textY);
      pop();
    }
*/

     if (scene == 2) { // scene 2 DEBUG version
        push();
        for (var j = 0; j < height; j++) { //background gradient blue to pink 2
           stroke(0, 50, j);
           line(0, j, width, j);
        }
        pop();

        fill(100, 255, 0);
        ellipse(mouseX, mouseY, 40, 40);
        image(scene2Brick, 617, -2);
        image(scene2CarInside, 0, 0);

        //turning wheel
        push();
        translate(175, 355);
        rotate(thetaWheel);
        imageMode(CENTER);
        image(scene2CarWheel, 0, 0);
        thetaWheel += thetaSpeed; // wheel turns back and forth
        if (thetaWheel >= 0.3 || thetaWheel <= -0.2) {
           //delay(2500);
           thetaSpeed *= -1;
        }
        pop();

        aBanner.display();

        if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
           aArrow.hover();
        } else {
           aArrow.display();
        }

        if (s2TextNum == 1) {
           s2Text = "In the car we pretend it is nighttime...";
        } else if (s2TextNum == 2) {
           s2Text = "Cool leather front seat with the windows down.";
        } else if (s2TextNum == 3) {
           s2Text = "The driver and passsenger seat is long and connected...";
        } else if (s2TextNum == 4) {
           s2Text = "Its sheer size an unwieldy comfort for any vehicle.";
        } else if (s2TextNum == 5) {
           s2Text = "Our eyes reach over the dashboard and we pretend to sit in a drive-in movie.";
        } else if (s2TextNum == 6) {
           s2Text = "We imagine Stagecoach plays in fuzzy images.";
        } else if (s2TextNum == 7) {
           s2Text = "John Wayne's character onscreen, tying a bandana around his neck.";
        } else if (s2TextNum == 8) {
           s2Text = "My brother bounces in his seat like the car's being pulled by horse.";
        } else if (s2TextNum == 9) {
           s2Text = "If we don't imagine movies, we pretend we're motorists on road trips.";
        } else if (s2TextNum == 10) {
           s2Text = "Other times we pretend we're escaping something.";
        } else {
           s2Text = "And we sit there for hours, single-mindedly focused on going somewhere else.";
           aArrow.none();
        }

        if (s2TextNum >= 6 && s2TextNum < 9) {
           fill(255);
           image(scene2John, 237, 70);
        }

        push(); //text format scene 2
        translate(textBoxX, textBoxY);
        fill(textColor);
        textFont(futuraBook);
        textSize(textSizeAll);
        textLeading(lead);
        text(s2Text, textX, textY);
        pop();

     }
     /*
         if (scene == 2) { //scene 2, Car scene
     */
     /*
     var radioX = 295;
      var radioY = 382;
      var radioSpeed =5;
      */
     /*
           background(0);
     */
     /*
     for (var i = 0; i<height; i++) { //background gradient
      stroke(0, i*0.4, i*0.1);
      line(0, i, width, i);
      }
      */
     /*
           push();
           for (var i = 0; i < height; i++) { //background gradient blue to pink 2
             stroke(0, 50, i);
             line(0, i, width, i);
           }
           pop();

           fill(100, 255, 0);
           ellipse(mouseX, mouseY, 40, 40);
           image(scene2Brick, 617, -2);
           image(scene2CarInside, 0, 0);

           push();
           translate(175, 355);
           rotate(thetaWheel);
           imageMode(CENTER);
           image(scene2CarWheel, 0, 0);
           thetaWheel += thetaSpeed; // wheel spins back and forth
           if (thetaWheel >= 0.3 || thetaWheel <= -0.2) {
             //delay(2500);
             thetaSpeed *= -1;
           }
           pop();
     */
     /*stroke(0);
      line(radioX, radioY, radioX, radioY+13); // radio line
      radioX = radioX + radioSpeed;
      prvarln(radioX);
      
      if ((radioX >= 372) || (radioSpeed < 295)){
      radioSpeed *= -1;
      }
      */
     /*
           banner.display();

           if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
             arrow.hover();
           } else {
             arrow.display();
           }

           if (s2TextNum == 1) {
             s2Text = "In the car we pretend it is nighttime...";
           } else if (s2TextNum == 2) {
             s2Text = "Cool leather front seat with the windows down.";
           } else if (s2TextNum == 3) {
             s2Text = "The driver and passsenger seat is long and connected...";
           } else if (s2TextNum == 4) {
             s2Text = "Its sheer size an unwieldy comfort for any vehicle.";
           } else if (s2TextNum == 5) {
             s2Text = "Our eyes reach over the dashboard and we pretend to sit in a drive-in movie.";
           } else if (s2TextNum == 6) {
             s2Text = "We imagine Stagecoach plays in fuzzy images.";
           } else if (s2TextNum == 7) {
             s2Text = "John Wayne's character onscreen, tying a bandana around his neck.";
           } else if (s2TextNum == 8) {
             s2Text = "My brother bounces in his seat like the car's being pulled by horse.";
           } else if (s2TextNum == 9) {
             s2Text = "If we don't imagine movies, we pretend we're motorists on road trips.";
           } else if (s2TextNum == 10) {
             s2Text = "Other times we pretend we're escaping something.";
           } else {
             s2Text = "And we sit there for hours, single-mindedly focused on going somewhere else.";
             arrow.none();
           }

           if (s2TextNum >= 6 && s2TextNum < 9) {
             fill(255);
             image(scene2John, 237, 70);
           }

           push(); //text format scene 2
           translate(textBoxX, textBoxY);
           fill(textColor);
           textFont(futuraBook);
           textSize(textSizeAll);
           textLeading(lead);
           text(s2Text, textX, textY);
           pop();
         }
         */

     if (scene == 3) { //DEBUG version
        var SunW = 200;
        var my = constrain(mouseY, SunW / 2, 370); // sun mouseY
        var mx = constrain(mouseX, SunW / 2, 720 - (SunW / 2));

        push();
        background(0, 255, 0);

        push();
        for (var k = 0; k < height; k++) { //background gradient blue to pink 2
           stroke(k * 2, k, 200);
           line(0, k, width, k);
        }
        pop();

        push();
        fill(255, 255, 0);
        stroke(255, 0, 0);
        ellipse(mx, my, SunW, SunW);
        imageMode(CENTER);
        //scene1FaceOff.resize(150, 150);
        image(scene1FaceOff, mx, my);

        stroke(0, 170, 20); // ground
        fill(0, 120, 20);
        rect(-15, 400, width + 30, height / 3);
        pop();

        aBanner.display();

        if (mouseIsPressed && (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w))) {
           aArrow.hover();
        } else {
           aArrow.display();
        }

        if (s3TextNum == 1) {
           s3Text = "Outside, we use the sun as a measurement...";
        } else if (s3TextNum == 2) {
           s3Text = "Of how long we've been here...";
        } else {
           s3Text = "And how long we'll be.";
           aArrow.none();
        }
        pop();

        push(); //text format scene 3
        translate(textBoxX, textBoxY);
        fill(textColor);
        textFont(futuraBook);
        textSize(textSizeAll);
        textLeading(lead);
        text(s3Text, textX, textY);
        pop();

     }

     /*
         if (scene == 3) { //scene 3, Sun scene
           var SunW = 200;
           var my = constrain(mouseY, SunW / 2, 370); // sun mouseY
           var mx = constrain(mouseX, SunW / 2, 720 - (SunW / 2));
           push();
           background(0, 255, 0);

           push();
           for (var i = 0; i < height; i++) { //background gradient blue to pink 2
             stroke(i * 2, i, 200);
             line(0, i, width, i);
           }
           pop();

           push();
           fill(255, 255, 0);
           stroke(255, 0, 0);
           ellipse(mx, my, SunW, SunW);
           imageMode(CENTER);
           scene1FaceOff.resize(150, 150);
           image(scene1FaceOff, mx, my);

           stroke(0, 170, 20); // ground
           fill(0, 120, 20);
           rect(-15, 400, width + 30, height / 3);
           pop();

           banner.display();

           if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
             arrow.hover();
           } else {
             arrow.display();
           }

           if (s3TextNum == 1) {
             s3Text = "Outside, we use the sun as a measurement...";
           } else if (s3TextNum == 2) {
             s3Text = "Of how long we've been here...";
           }
     */
     /*else if (s3TextNum ==3) {
         s3Text="And how long we'll be.";
         } else if (s3TextNum ==4) {
         s3Text="We imagine Sunset Boulevard plays in fuzzy images.";
         } else if (s3TextNum ==5) {
         s3Text="'Without me, there wouldn't be any Paramount studio,' my brother would recite.";
         } else if (s3TextNum ==6) {
         s3Text="He held his fingers out with an imaginary cigarette.";
         } else if (s3TextNum ==7) {
         s3Text="She tells us that she made houses, pavared fat lizzards and wiry pubic hair.";
         } else if (s3TextNum ==8) {
         s3Text="And when we've exhausted her and she starts to fall asleep we run outside.";
         } else if (s3TextNum ==9) {
         s3Text="And we explore Utopia.";
         } */
     /*
        else {
          s3Text = "And how long we'll be.";
          arrow.none();
        }
        pop();


        push(); //text format scene 3
        translate(textBoxX, textBoxY);
        fill(textColor);
        textFont(futuraBook);
        textSize(textSizeAll);
        textLeading(lead);
        text(s3Text, textX, textY);
        pop();
      }


      if (scene == 4) { // scene 4, Tree scene


        push();
        background(150, 0, 255);

        pushStyle();
        for (var i = 0; i < height; i++) { //background gradient
          strokeWeight(1);
          stroke(i, backB, i);
          line(0, i, width, i);
        }
        pop();


        image(scene4TreeBase, 0, 0);

        banner.display();
        popMatrix();

        pushMatrix(); // make spinning rotate leaf
        //translate(leafX, leafY);
        //rotate(0.5);
        //thetaLeaf+=0.1;
        image(scene4TreeLeaf, leafX, leafY);

        image(scene4TreeTop, 90, 0);
        leafY += 2;
        if (leafY >= height + 60) {
          leafY = -20;
          leafX = ran;
        }

        if (s4TextNum == 1) {
          s4Text = "The sassafrass tree gives way to some shaky, gentle wind.";
        } else if (s4TextNum == 2) {
          s4Text = "Below the tree, Aunt Joyce remembers marrying our Aunt Judtih here.";
        } else if (s4TextNum == 3) {
          s4Text = "'They used to call them shotgun weddings,' Aunt Joyce would say.";
        } else if (s4TextNum == 4) {
          s4Text = "That was before Aunt Judith died.";
        } else if (s4TextNum == 5) {
          s4Text = "The bark looks like combed clay, and I feel its patches.";
        } else if (s4TextNum == 6) {
          s4Text = "Once we could climb this tree, but now we sit by the base...";
        } else if (s4TextNum == 7) {
          s4Text = "We think of the 100 hundred pairs of feet that moved at the wedding.";
        } else {
          treeDone = true;
          s4Text = "And the same 100 hundred pairs that stood solemnly when Judith passed.";
        }

        pop();

        if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
          arrow.hover();
        } else {
          arrow.display();
        }


        if (treeDone) {
          pushMatrix();
          pushStyle();
          arrow.none();
          popMatrix();
          popStyle();
        }


        push();
        //aBanner.display();
        translate(textBoxX, textBoxY);
        fill(textColor);
        textFont(futuraBook);
        textSize(textSizeAll);
        textLeading(lead);
        text(s4Text, textX, textY);
        pop();
      }
      if (scene == 5) { //scene 5, Dome scene
        push();
        background(0, 80, 255);
        fill(0, 80, 30);
        image(scene5bg, 0, 0);
        image(scene5pavaring, 300, 50);
        image(scene5sculpture1, 50, 100);
        image(scene5sculpture2, 545, 75);
        rectMode(CENTER);
        //ellipse(mouseX, mouseY, mouseX*0.14, mouseY*0.14);
        pop();

        aBanner.display();
        if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
          arrow.hover();
        } else {
          arrow.display();
        }

        if (s5TextNum == 1) {
          s5Text = "Inside the dome the scent is musky and heavy.";
        } else if (s5TextNum == 2) {
          s5Text = "Aunt Joyce and her collective used to host art shows here.";
        } else if (s5TextNum == 3) {
          s5Text = "We imagine the old pieces in their places...";
        } else if (s5TextNum == 4) {
          s5Text = "Nude artists would perform in a circle, their bodies responding to the perimeter.";
        } else if (s5TextNum == 5) {
          s5Text = "Aunt Joyce said even my mother would bring by her spill pavarings.";
        } else if (s5TextNum == 6) {
          s5Text = "They'd all smoke dry weed and eat homemade bread with mulled wine...";
        } else if (s5TextNum == 7) {
          s5Text = "And dance like they could dent the earth if they tried..";
        } else if (s5TextNum == 8) {
          s5Text = "But there hasn't been a show here in at least 20 years.";
        } else if (s5TextNum == 9) {
          s5Text = "Most of them forgot what their art was doing, or decided it didn't matter.";
        } else if (s5TextNum == 10) {
          s5Text = "We touch the materials gently, as if we might remember for them.";
        } else {
          s5Text = "'It does matter,' I say, but it comes out like a whisper.";
          arrow.none();
          //domeDone == true;
        }

        if (s5TextNum >= 10) {
          background(0, 80, 255);
          image(scene5bg, 0, 0);
          image(scene5pavaring, 600, 30);
          image(scene5sculpture1close, 0, 0);
          aBanner.display();
          if (mouseX > arrow.lockX && mouseX < (arrow.lockX + arrow.w) && mouseY > arrow.lockY && mouseY < (arrow.lockY + arrow.w)) {
            arrow.hover();
          } else {
            arrow.display();
          }
        } else {}

        if (s5Text == "'It does matter,' I say, but it comes out like a whisper.") {
          arrow.none();
        } else {}


        //popMatrix();
        //popStyle();

        //  if (domeDone == false) {
        //    arrow.display();
        //  } else {
        //   arrow.none();
        //  }
        push();
        //aBanner.display();
        translate(textBoxX, textBoxY);
        fill(textColor);
        textFont(futuraBook);
        textSize(textSizeAll);
        textLeading(lead);
        text(s5Text, textX, textY);
        pop();
      }
*/

     /*
          function PlayButton() {
             this.x = 312;
             this.y = 340;
             this.w = 85;

             this.display = function() {
                push();
                translate(this.x, this.y);
                fill(homeButton.rI, homeButton.gI, homeButton.bI);
                strokeWeight(3);
                stroke(homeButton.r, homeButton.g, homeButton.b);
                rect(0, 0, this.w, homeButton.h);
                fill(0);
                textFont(futuraBold);
                text("BEGIN", 10, 25);
                pop();
             }
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
          }
          
        */


     /*
       
       //fill(255, 0, 255);
       //rect(width / 2, height / 2, 300, 300);
       
       
       //push();
       //translate(312, 340);
       //fill(10, 230, 255);
       //strokeWeight(3);
       //stroke(0, 70, 255);
       //rect(0, 0, 85, 35);
       //fill(0);
       //noStroke();
       //textFont(futuraBold, 16);
       //text("BEGIN", 10, 25);
       //pop();

       /*
            if (scene >= 1) { // display home button if scene is 1 or more
               homeButton.display(); // display home button to navigate back
               homeButton.rollover(); // rollver home button
            } else if (scene === 0) {
               new playButton();
               playButton.display();
               playButton.rollover();
            } else {}
            //aBanner.display();
            */
     // mouseClicked go to next scene, scene = scene+1, scene = 
     if (scene == 1) {
        if (mouseIsPressed && (mouseX > arrowX && mouseX < (arrowX + arrowW) && mouseY > arrowY && mouseY < (arrowY + arrowW))) {
           if (s1TextNum == 1) { // scene 1, map
              //if (milliseconds > 2000) {
              //  s1TextNum = 2;
              //}

              setTimeout(s1TextNum = 2, 1000);
           } else if (s1TextNum == 2) {
              //if (milliseconds > 2000) {
              //   s1TextNum = 3;
              //}
              setTimeout(s1TextNum = 3, 1000);
           } else if (s1TextNum == 3) {
              //if (milliseconds > 2000) {
              //  s1TextNum = 4;
              //}
              setTimeout(s1TextNum = 4, 1000);
           } else if (s1TextNum == 4) {
              //if (milliseconds > 2000) {
              //   s1TextNum = 5;
              //}
              setTimeout(s1TextNum = 5, 1000);
           } else if (s1TextNum == 5) {
              if (milliseconds > 2000) {
                 s1TextNum = 6;
              }
           } else if (s1TextNum == 6) {
              if (milliseconds > 2000) {
                 s1TextNum = 7;
              }
           } else if (s1TextNum == 7) {
              if (milliseconds > 2000) {
                 s1TextNum = 8;
              }
           } else if (s1TextNum == 8) {
              if (milliseconds > 2000) {
                 s1TextNum = 9;
              }
           } else if (s1TextNum == 9) {
              if (milliseconds > 2000) {
                 s1TextNum = 10;
              }
           }
        }
     }
     if (scene == 2) { // scene 2, Car
        if (mouseX > arrowX && mouseX < (arrowX + arrowW) && mouseY > arrowY && mouseY < (arrowY + arrowW)) {
           if (s2TextNum == 1) {
              s2TextNum = 2;

           } else if (s2TextNum == 2) {
              s2TextNum = 3;

           } else if (s2TextNum == 3) {
              s2TextNum = 4;

           } else if (s2TextNum == 4) {
              s2TextNum = 5;

           } else if (s2TextNum == 5) {
              s2TextNum = 6;

           } else if (s2TextNum == 6) {
              s2TextNum = 7;

           } else if (s2TextNum == 7) {
              s2TextNum = 8;

           } else if (s2TextNum == 8) {
              s2TextNum = 9;

           } else if (s2TextNum == 9) {
              s2TextNum = 10;

           } else if (s2TextNum == 10) {
              s2TextNum = 11;

           }
        }
     }

     if (scene == 3) { // scene 3, Sun
        if (mouseX > arrowX && mouseX < (arrowX + arrowW) && mouseY > arrowY && mouseY < (arrowY + arrowW)) {
           if (s3TextNum == 1) {
              s3TextNum = 2;

           } else if (s3TextNum == 2) {
              s3TextNum = 3;

           } else if (s3TextNum == 3) {
              s3TextNum = 4;

           } else if (s3TextNum == 4) {
              s3TextNum = 5;

           } else if (s3TextNum == 5) {
              s3TextNum = 6;

           } else if (s3TextNum == 6) {
              s3TextNum = 7;

           } else if (s3TextNum == 7) {
              s3TextNum = 8;

           } else if (s3TextNum == 8) {
              s3TextNum = 9;

           } else if (s3TextNum == 9) {
              s3TextNum = 10;

           } else if (s3TextNum == 10) {
              s3TextNum = 11;

           }
        }
     }
     if (scene == 4) { //scene 4, Tree
        if (mouseX > arrowX && mouseX < (arrowX + arrowW) && mouseY > arrowY && mouseY < (arrowY + arrowW)) {
           if (s4TextNum == 1) {
              s4TextNum = 2;

           } else if (s4TextNum == 2) {
              s4TextNum = 3;

           } else if (s4TextNum == 3) {
              s4TextNum = 4;

           } else if (s4TextNum == 4) {
              s4TextNum = 5;

           } else if (s4TextNum == 5) {
              s4TextNum = 6;

           } else if (s4TextNum == 6) {
              s4TextNum = 7;

           } else if (s4TextNum == 7) {
              s4TextNum = 8;

           } else if (s4TextNum == 8) {
              s4TextNum = 9;

           } else if (s4TextNum == 9) {
              s4TextNum = 10;

           } else if (s4TextNum == 10) {
              s4TextNum = 11;

           }
        }
     }

     if (scene == 5) { //scene 5, Dome
        if (mouseX > arrowX && mouseX < (arrowX + arrowW) && mouseY > arrowY && mouseY < (arrowY + arrowW)) {
           if (s5TextNum == 1) {
              s5TextNum = 2;

           } else if (s5TextNum == 2) {
              s5TextNum = 3;

           } else if (s5TextNum == 3) {
              s5TextNum = 4;

           } else if (s5TextNum == 4) {
              s5TextNum = 5;

           } else if (s5TextNum == 5) {
              s5TextNum = 6;

           } else if (s5TextNum == 6) {
              s5TextNum = 7;

           } else if (s5TextNum == 7) {
              s5TextNum = 8;

           } else if (s5TextNum == 8) {
              s5TextNum = 9;

           } else if (s5TextNum == 9) {
              s5TextNum = 10;

           } else if (s5TextNum == 10) {
              s5TextNum = 11;

           } else if (s5TextNum == 11) {
              s5TextNum = 12;

           }
        }
     }
  }