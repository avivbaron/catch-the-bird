// closing pipes
function closePipes(){

  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeUp,240,-130 + move);
  ctx.drawImage(pipeDown,240,pipeUp.height - 130 + gap - move);
  ctx.drawImage(bird,bird1.x,bird1.y + Math.sin(Math.floor(((bird1.x)/4)))*10);

  move+=5;

  text_mode_1();

  if(move >= 25){
    return;
  }
  requestAnimationFrame(closePipes);
}

// opening pipes
function openPipes(){

  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeUp,240,-130 + move);
  ctx.drawImage(pipeDown,240,pipeUp.height - 130 + gap - move);
  ctx.drawImage(bird,bird1.x,bird1.y + Math.sin(Math.floor(((bird1.x)/4)))*10);

  move--;

  text_mode_1();

  if(move <= 1){
    return;
  }
  requestAnimationFrame(openPipes);
}
