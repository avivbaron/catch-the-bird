
// load canvas
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.font = "20px Arial";
ctx.fillStyle = "red";

// load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

bird.src = "images/bird.png";
bg.src = "images/bigbg.png";
fg.src = "images/fg.png";
pipeUp.src = "images/pipeNorth.png";
pipeDown.src = "images/pipeSouth.png";

// variables
var score = 0;
var highscore = 0;
var gap = 55;
var mode = 0;
var move = 0;

bird1 = new Bird();

// detect key pressing
document.addEventListener("keydown", keyPressed);

// draw the game
function draw(){
    // play ground
    ctx.drawImage(bg,0,0);
    ctx.drawImage(pipeUp,240,-130);
    ctx.drawImage(pipeDown,240,pipeUp.height - 130 + gap);

    // start mode
    if(mode == 0){
      text_mode_0();
    }

    // play mode
    else if(mode == 1){
      ctx.drawImage(bird,bird1.x,bird1.y + Math.sin(Math.floor(((bird1.x)/4)))*10);

      bird1.x+=1.5;

      text_mode_1();
    }

    // game-over mode
    else if(mode == 2){
      text_mode_2();
      score = 0; // initialize score
    }

    // the bird will reach the end faster after missing
    if(bird1.x >= 300){
      bird1.x+=3;
    }

    // detect losing position
    if(bird1.x >= 500){
      mode = 2;
      bird1.reset();
    }

    // update highscore
    if(highscore < score){
      highscore = score;
    }

    requestAnimationFrame(draw);
  }
draw();
