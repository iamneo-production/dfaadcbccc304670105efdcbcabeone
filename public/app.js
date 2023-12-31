// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function checkWin(){
    for(let condition of winConditions){
        const [a, b, c] = condition;
        if(cells[a] && cells[a] === cells[b] && cells[b] === cells[c]){
            return cells[a];
        }
        if(!cells.includes('')){
            return draw;
        }
        return null;
    }
}

function handleMove(element, index){
    if(cells[index] || checkWin()){
        return;
    }
    cells[index] = currentPlayer;
    element.value = currentPlayer;
    element.disabled = true;
    currentPlayer = currentPlayer === 'X'?'O':'X';
    const winner = checkWin();
    if(winner === "draw"){
        result.innerHTML = "It\'s a draw!";
    }else if(winner){
        result.innerHTML = `Player ${winner} Won`;
        btns.forEach((btn)=>btn.disabled=true);
    }else{
        result.innerHTML = `Player $ {currentPlayer} Turn`;
    }
}

function resetGame(){
    cells = ['','','','','','','','',''];
    btns.forEach((btn) => {
        btn.value = '';
        btn.disabled = false;
    });
    currentPlayer = 'X';
    result.innerHTML = 'Player X Turn';
}
// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
