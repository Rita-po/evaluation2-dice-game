let scores;
let roundScore;
let activePlayer;
let gamePlaying;



//Button "roll"
document.querySelector(".btn-roll").addEventListener("click", () => {
    if (gamePlaying) {
        //Random number generator
        let dice = Math.floor(Math.random() * 6) + 1;

        //Display the result on screen by using dice image
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";


        //Update the score of the round but only if the result is NOT 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.getElementById(
                "current-" + activePlayer
            ).textContent = roundScore;
            //if the result is 1 -> next player
        } else {
            // Next player
            nextPlayer();
        }
    }
});


//Button "hold"
document.querySelector(".btn-hold").addEventListener("click", () => {
    if (gamePlaying) {
        //Add current score in general score
        scores[activePlayer] += roundScore;



        //Display the score to the general score
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];


        //Check the global score to find the winner and display result
        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner !";
            document.querySelector(".dice").style.dispaly = "none";

            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");

            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});
//Go to the next player
function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

};

// button "new game"
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    // score vars reset
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";
    //All scores reset
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    //Player name reset
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    //Class remove    
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
};