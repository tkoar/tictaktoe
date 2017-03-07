var box = document.getElementsByClassName('box');
console.log(box);

var gameBoard = [
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2]
]

var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

var testBoard = [
  [false, false, false],
  [false, false, false],
  [false, false, false]
];

var player = "X";

var color = " red";

for (var i = 0; i < box.length; i++) {
  box[i].onclick = function (event) {
    var x = this.dataset.x;
    var y = this.dataset.y;
    if (!testBoard[x][y]) {
      this.className += color;
      color = color === " red" ? " blue" : " red";
      this.board[x][y] = player;
      player = player === "X" ? "O" : "X"
      testBoard[x][y] = true;
    }
  }
}

console.log(board);

var button = document.getElementsByTagName('button')

function resetGame() {
  window.location.reload();
}
