const gameArea = document.querySelector("#game-area");

function createDisplayElement() {
  let newDisplayElement = document.createElement("div");
  newDisplayElement.classList.add("gameboard");
  gameArea.appendChild(newDisplayElement);
  return newDisplayElement;
}

class Display {
  constructor(player, element = createDisplayElement()) {
    this.player = player;
    this.element = element;
    this.squares = this.#createAllSquares();
  }

  #createSquare() {
    let newSquare = document.createElement("div");
    newSquare.classList.add("gameboard-square");
    this.element.appendChild(newSquare);
    return newSquare;
  }

  #createAllSquares() {
    let squares = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        let square = this.#createSquare();
        row.push(square);
      }
      squares.push(row);
    }
    return squares;
  }

  renderSquare(x, y) {
    if (this.player.gameboard.board[x][y].hit) {
      this.squares[x][y].classList.add("hit");
    }
    if (this.player.gameboard.isOccupied(x, y)) {
      this.squares[x][y].classList.add("ship");
      if (this.player.gameboard.board[x][y].ship.sunk === true) {
        this.squares[x][y].classList.add("sunk");
      }
    }
  }

  renderAllSquares() {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        this.renderSquare(x, y);
      }
    }
  }
}

export { Display };
