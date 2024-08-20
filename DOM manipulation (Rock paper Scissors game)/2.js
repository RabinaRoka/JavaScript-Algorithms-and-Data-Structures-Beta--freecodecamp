function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
     if (player === computer) {
      return false; // It's a tie, so the player hasn't won
    }
  
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return true; // The player wins
    }
  
    return false; // The player loses
  }
    
  
  
  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); 