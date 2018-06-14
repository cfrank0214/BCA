/**
 * Program for playing basic Tic-Tac-Toe
 *
 * @author chris.frank michael.felix tim.rose
 */

let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let turnCount = 1;
let currentTurn = 'X';

console.log("Tic Tac Toe, three in a row!!");
gameTurn();

/**
 * Fuction that acepts imput from player on which box they want to chose
 * then updates counter and board array. 
 */

function gameTurn() {
  printBoard(board);
  console.log('Player ' + currentTurn + ' please choose your next move. Choose one of the remaining numbers.')
  process.stdin.once('data', (move) => {
    move = move.toString().trim();
    if (isEntryValid(move)) {  
    board[board.indexOf(move)] = currentTurn;
    if (checkVictory()) {
      console.log('Player ' + currentTurn + ' won!!');
      printBoard(board);
      process.exit();
    }
    turnCount++;
    if (turnCount > 9) {
      console.log('It is a tie!!');
      printBoard(board);
      process.exit();
    }
    if (turnCount % 2 !== 0) {
      currentTurn = 'X'
    } else {
      currentTurn = "O"
    }
    gameTurn();
  } else {
    gameTurn();
  }
  });

}

/**
 * Function to draw board in console.
 */

function printBoard(board) {
    console.log("           ")
    console.log(" " + board[0] + " | " + board[1] + " | " + board[2] + " ")
    console.log("---|---|---")
    console.log(" " + board[3] + " | " + board[4] + " | " + board[5] + " ")
    console.log("---|---|---")
    console.log(" " + board[6] + " | " + board[7] + " | " + board[8] + " ")
    console.log("           ")
  }

  /**
 * Function to check if a player has won the game. Then updates board appropriately.
 */

function checkVictory() {
  if ((board[0] === board[1]) && (board[1] === board[2])) {      //if horizontal top row positions equal each other
    board[0] = '-'
    board[1] = '-'
    board[2] = '-'
    return true;
  }
  if ((board[3] === board[4]) && (board[4] === board[5])) {      //if horizontal middle row positions equal each other
    board[3] = '-'
    board[4] = '-'
    board[5] = '-'
    return true;
  }
  if ((board[6] === board[7]) && (board[7] === board[8])) {      //if horizontal bottom row positions equal each other
    board[6] = '-'
    board[7] = '-'
    board[8] = '-'
    return true;
  }
  if ((board[0] === board[3]) && (board[3] === board[6])) {      //if vertical left column positions equal each other
    board[0] = '|'
    board[3] = '|'
    board[6] = '|'
    return true;
  }
  if ((board[1] === board[4]) && (board[4] === board[7])) {      //if vertical middle column positions equal each other
    board[1] = '|'
    board[4] = '|'
    board[7] = '|'
    return true;
  }
  if ((board[2] === board[5]) && (board[5] === board[8])) {      //if vertical right column positions equal each other
    board[2] = '|'
    board[5] = '|'
    board[8] = '|'
    return true;
  }
  if ((board[0] === board[4]) && (board[4] === board[8])) {      //if diagonal top left to bottom right positions equal each other
    board[0] = '\\'
    board[4] = '\\'
    board[8] = '\\'
    return true;
  }
  if ((board[6] === board[4]) && (board[4] === board[2])) {      //if diagonal top right to bottom left positions equal each other
    board[6] = '/'
    board[4] = '/'
    board[2] = '/'
    return true;
  }
}

  /**
 * Checks if input from the user is valid for game play.
 */

function isEntryValid(text) {
  let regex1 = /[1-9]/

  if (!text.match(regex1)) {
    console.log('Please enter a number between 1 & 9');
    return false;
  }
  if (!board.includes(text)) {
    console.log('That space has already been taken please choose another.');
    return false;
  } else {
    return true;
  }
}
