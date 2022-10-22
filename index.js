  // Creating an array
  const images = [];
  images.push('./images/paper.png','./images/scissors.png','./images/rock.png');

  // Dom elements
  const availablePicks = ['paper', 'scissors', 'rock'];
  const button1 = document.getElementById("btn1");
  const button2 = document.getElementById("btn2");
  const button3 = document.getElementById("btn3");
  let image1 = document.querySelector(".image1");
  let image2 = document.querySelector(".image2");
  let title = document.getElementById("title");

  // Variables
  let playerChoice;
  let playerScore = 0;
  let computerScore = 0;
 
  //Function game
  function game(){
    let computerChoice = availablePicks[Math.floor(Math.random() * availablePicks.length)];
      if (playerChoice == computerChoice && playerScore < 5 && computerScore < 5) { 
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        title.innerHTML = "Draw! Score now is " + playerScore + " - " + computerScore;
    } else if (playerChoice == 'paper' && computerChoice == 'rock' && playerScore < 5 && computerScore < 5){
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        playerScore++;
        title.innerHTML = "You won! Score now is " + playerScore + " - " + computerScore;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors' && playerScore < 5 && computerScore < 5){
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        computerScore++;
        title.document.getElementById("title").innerHTML = "You lost! Score now is " + playerScore + " - " + computerScore;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper' && playerScore < 5 && computerScore < 5){
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        playerScore++;
        title.document.getElementById("title").innerHTML = "You won! Score now is " + playerScore + " - " + computerScore;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock' && playerScore < 5 && computerScore < 5){
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        computerScore++;
        title.innerHTML = "You lost! Score now is " + playerScore + " - " + computerScore;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors' && playerScore < 5 && computerScore < 5){
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        playerScore++;
        title.innerHTML = "You won! Score now is " + playerScore + " - " + computerScore;
    } else if (playerChoice == 'rock' && computerChoice == 'paper' && playerScore < 5 && computerScore < 5){
        image2.setAttribute("src", "./images/"+computerChoice+".png");
        image1.setAttribute("src", "./images/"+playerChoice+".png");
        computerScore++;
        title.innerHTML = "You lost! Score now is " + playerScore + " - " + computerScore;
    } else if(playerScore == 5){
        title.innerHTML = "Game over! Final score is " + playerScore + " - " + computerScore + " You win!";
        button1.remove();
        button2.remove();
        button3.remove();
    }
      else if(computerScore == 5){
        title.innerHTML = "Game over! Final score is " + playerScore + " - " + computerScore + " Computer wins!";
        button1.remove();
        button2.remove();
        button3.remove();
  }
  }

  // Event listeners
  button1.addEventListener("click", function() {
    playerChoice = btn1.textContent;
    game();
  });

  button2.addEventListener("click", function() {
    playerChoice = btn2.textContent;
    game();
  });

  button3.addEventListener("click", function() {
    playerChoice = btn3.textContent
    game();
  });