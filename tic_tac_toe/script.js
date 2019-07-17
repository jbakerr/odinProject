let playerTurn = (turn) => {
  if(turn % 2 == 0){
    return("O");
  } else{
    return("X");
  }
  };


const cell = document.querySelectorAll('.cell');



const playerStatus = document.querySelector('.turn');


let turn = 1;

var gameActive = true;

while(gameActive == true){
  if(turn % 2 == 0){
    playerStatus.textContent = "Player 2's Turn";
  } else{
    playerStatus.textContent = "Player 1's Turn";
  }

  cell.forEach((cell) =>{
    cell.addEventListener('click', (e) =>{
      tmp = document.querySelector("#" + e.target.id);
      tmp.textContent = playerTurn(turn);
      // turn++;

    });
  });

  // turn++;?

  if(turn==4){
    gameActive = false;
  }




}
