var box = document.getElementsByClassName('box');
console.log(box);

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

var testBoard = [
  [false, false, false],
  [false, false, false],
  [false, false, false]
];

var x = (Math.floor((Math.random() * 10) + 1));
if (x % 2 === 0) {
  var y = "O";
} else {
  y = "X";
}

var player = y;

var playerX = "X";
var playerO = "O";

var color = " red";

for (var i = 0; i < box.length; i++) {
  box[i].onclick = function (event) {
    var x = this.dataset.x;
    var y = this.dataset.y;
    if (!testBoard[x][y]) {
      this.className += color;
      color = color === " red" ? " blue" : " red";
      player = player === playerX ? playerO : playerX;
      this.innerHTML = player;
      board[x][y] = player;
      testBoard[x][y] = true;
    }
    checkForTicTacToe(board);
  }
}

console.log(board);

function checkForTicTacToe(board) {
  for (var i = 0; i < 3; i++) {
    if (board[i][0] === playerX && board[i][1] === playerX && board[i][2] === playerX) {
      alert("congrats, " + playerX + "! you won!");
      break;
    } else if (board[0][i] === playerX && board[1][i] === playerX && board[2][i] === playerX) {
      alert("congrats, " + playerX + "! you won!");
      break;
    } else if (board[0][0] === playerX && board[1][1] === playerX && board[2][2] === playerX) {
      alert("congrats, " + playerX + "! you won!");
      break;
    } else if (board[0][2] === playerX && board[1][1] === playerX && board[2][0] === playerX) {
      alert("congrats, " + playerX + "! you won!");
      break;
    } else if (board[i][0] === playerO && board[i][1] === playerO && board[i][2] === playerO) {
      alert("congrats, " + playerO + "! you won!");
      break;
    } else if (board[0][i] === playerO && board[1][i] === playerO && board[2][i] === playerO) {
      alert("congrats, " + playerO + "! you won!");
      break;
    } else if (board[0][0] === playerO && board[1][1] === playerO && board[2][2] === playerO) {
      alert("congrats, " + playerO + "! you won!");
      break;
    } else if (board[0][2] === playerO && board[1][1] === playerO && board[2][0] === playerO) {
      alert("congrats, " + playerO + "! you won!");
      break;
    }
  }
}


var button = document.getElementsByTagName('button');

function resetGame() {
  window.location.reload();
};
