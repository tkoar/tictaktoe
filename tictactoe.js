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

var player = "X";
var p1 = "X";
var p2 = "0";


var color = " red";

for (var i = 0; i < box.length; i++) {
  box[i].onclick = function (event) {
    var x = this.dataset.x;
    var y = this.dataset.y;
    if (!testBoard[x][y]) {
      this.className += color;
      color = color === " red" ? " blue" : " red";
      player = player === "X" ? "O" : "X";
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
    if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X") {
      alert("congrats, player X! you won!");
    } else if (board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X") {
      alert("congrats, player X! you won!");
    } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
      alert("congrats, player X! you won!");
    } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
      alert("congrats, player X! you won!");
    } else if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O") {
      alert("congrats, player O! you won!");
    } else if (board[0][i] === "O" && board[1][i] === "O" && board[2][i] === "O") {
      alert("congrats, player O! you won!");
    } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
      alert("congrats, player O! you won!");
    } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
      alert("congrats, player O! you won!");
    }
  }
}


var button = document.getElementsByTagName('button');

function resetGame() {
  window.location.reload();
};
