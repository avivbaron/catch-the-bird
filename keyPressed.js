function keyPressed(event){

  // start the game by pressing ENTER
  if(event.key === "Enter"){
    mode = 1;
    if(mode === 2){
      location.reload();
    }
  }

  // detect score position
  else if(bird1.x >= 220 && bird1.x <= 290 && mode == 1){
    closePipes();
    openPipes();
    score++;
    bird1.reset();
   }

  else if(mode == 1){
    closePipes();
    openPipes();
   }
};
