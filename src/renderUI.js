// import { player1, player2 } from "./index";

const p1NameDisplay = document.querySelector("#p1-name");
const p2NameDisplay = document.querySelector("#p2-name");
const p1GameboardDisplay = document.querySelector("#p1-gameboard");
const p2GameboardDisplay = document.querySelector("#p2-gameboard");

class DOMGameboard {
  constructor(player, gameboardElement = p1GameboardDisplay) {
    this.player = player;
    this.gameboardElement = gameboardElement;
    this.board = Array(10)
      .fill()
      .map(() => Array(10).fill(this.#createSquare()));
    // this.#initializeSquares();
  }
  //   #initializeSquares() {
  //     this.board.forEach((row) => {
  //       row.forEach((position) => {
  //         let newSquare = document.createElement("div");
  //         newSquare.classList.add("gameboard-square", `${this.player.name}`);
  //         this.gameboardElement.appendChild(square);
  //         position = newSquare;
  //       });
  //     });
  //   }
  #createSquare() {
    let newSquare = document.createElement("div");
    newSquare.classList.add("gameboard-square");
    this.gameboardElement.appendChild(newSquare);
    return newSquare;
  }
}

// function intializeGameDisplay(player1, player2) {
//   player1.gameboard.board.forEach((row) => {
//     row.forEach(() => {
//       let square = document.createElement("div");
//       square.classList.add("gameboard-square", "p1");
//       p1GameboardDisplay.appendChild(square);
//     });
//   });
// }

export { DOMGameboard };
