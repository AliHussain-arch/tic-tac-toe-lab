/*-------------------------------- Constants --------------------------------*/
const message = document.querySelector('#message');
const sqr = document.querySelectorAll('.sqr');
const board = document.querySelector('.board');
const resetButton = document.querySelector('#resetButton');

/*---------------------------- Variables (state) ----------------------------*/
let round = 0;
let X_winner = [];
let O_winner = [];

/*-------------------------------- Functions --------------------------------*/
function checkWinner(X_winner,O_winner,round){
    let winnerFound = false;
    winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winningCombos.forEach((element) => {
        if(X_winner.includes(element[0]) && X_winner.includes(element[1]) && X_winner.includes(element[2])){
            message.textContent = 'X won';
            winnerFound = true;
            return;
        }
        else if(O_winner.includes(element[0]) && O_winner.includes(element[1]) && O_winner.includes(element[2])){
            message.textContent = 'O won';
            winnerFound = true;
            return;
        }
    });
    if(!winnerFound){
        if(round === 9){
            message.textContent = 'It is a tie';
        }
        else if(round === 0||round%2 === 0){
            message.textContent = 'It is X turn';
        }
        else if(round%2 !== 0 ){
            message.textContent = 'It is O turn';
        }
    }
}
function resetGame(){
    round = 0;
    X_winner = [];
    O_winner = [];
    sqr.forEach(square => {
            square.textContent = "";
        });
    message.textContent = "START GAME";
}

/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', (event) => {
    if(event.target.textContent !== 'X' && event.target.textContent !== 'O'){ 
        if (round === 0||round%2 === 0){
            event.target.textContent = 'X';
            X_winner.push(Number(event.target.id));
        }
        else if (round%2 !== 0) {
            event.target.textContent = 'O';
            O_winner.push(Number(event.target.id));
        }
        round ++;
        checkWinner(X_winner,O_winner,round);
    }
}); 

resetButton.addEventListener('click',resetGame);
