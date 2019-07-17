function getComputerInput(){
  const options = ["Rock", "Paper", "Scissors"];
  randomSelecton = options[Math.floor(Math.random() * options.length)];
  return randomSelecton
}



function determineWinner(player1, computer){
  if(player1 == computer){
    return("tie");
  }else{

    if(player1 == "Rock"){

      if(computer == "Scissors"){
        return("player1");
      }else{
        return("computer");
      }
    }else if(player1 == "Paper"){

      if(computer == "Rock"){
        return("player1");
      }else{
        return("computer");
      }
    }else if(player1 == "Scissors"){
      if(computer == "Paper"){
        return("player1");
      }else{
        return("computer");
      }
    }
  }
}

function displayText(results){
  switch(results){
    case "computer":
      return "The Computer Won!";
    case "player1":
      return "You Won!";
    case "tie":
      return "There was a tie.";
  }
}


function playGame(playerInput){

  const resultDiv = document.querySelector(".results");

  const playerSelectionDisplay = document.querySelector("#playerSelection");

  const compSelectionDisplay = document.querySelector("#computerSelection");



  computerInput = getComputerInput();

  results = determineWinner(playerInput, computerInput);

  textResults = displayText(results);

  playerSelectionDisplay.textContent = playerInput;

  compSelectionDisplay.textContent = computerInput;


  resultDiv.textContent = textResults;

}


const playerSelectionButtons = document.querySelectorAll(".playerOption");

playerSelectionButtons.forEach((button) => {

  button.addEventListener('click', (e) => {
    playGame(button.textContent);
  });
});

