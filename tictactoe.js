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
  }
}

console.log(board);



var button = document.getElementsByTagName('button');

function resetGame() {
  window.location.reload();
};
