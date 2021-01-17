function text_mode_0(){
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.fillText("CATCH THE BIRD", 250, 130);
  ctx.font = "15px Arial";
  ctx.fillText("PRESS ENTER TO START", 250, 160);
}

function text_mode_1(){
  ctx.textAlign = "start";
  ctx.fillText("Score : "+ score, 10, cvs.height-40);
  ctx.fillText("HIGH-SCORE : "+ highscore, 10, cvs.height-20);
}

function text_mode_2(){
  ctx.textAlign = "center";
  ctx.font = "30px Arial";
  ctx.fillText("Game Over", 250, 100);
  ctx.font = "15px Arial";
  ctx.fillText("HIGH SCORE: " + highscore, 250, 140);
  ctx.fillText("PRESS ENTER TO START AGAIN", 250, 180);
}
