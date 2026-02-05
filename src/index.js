import "./styles.css";
import { players } from "./runGame";
import { DOMGameboard } from "./DOMgameboard";

let activePlayer = players[0];
let inactivePlayer = players.find((player) => player !== activePlayer);

players.forEach((player) => {
  player.gameboard.display = new DOMGameboard(player);
  player.gameboard.display.renderAllSquares();
});

for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    inactivePlayer.gameboard.display.squares[x][y].classList.add("hidden");
  }
}

players.forEach((player) => {
  player.gameboard.display.element.addEventListener("click", (e) => {
    if (player === activePlayer) {
      return;
    }

    let x, y;
    inactivePlayer.gameboard.display.squares.map((row) => {
      if (row.includes(e.target)) {
        x = inactivePlayer.gameboard.display.squares.indexOf(row);
        y = row.indexOf(e.target);
      }
    });

    inactivePlayer.gameboard.receiveAttack(x, y);
    inactivePlayer.gameboard.display.renderSquare(x, y);
    e.target.classList.add("hit");

    if (inactivePlayer.gameboard.allSunk()) {
      alert(`Congratulations! ${activePlayer.name} wins!`);
      return;
    }

    activePlayer = inactivePlayer;
    inactivePlayer = players.find((player) => player !== activePlayer);

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        activePlayer.gameboard.display.squares[x][y].classList.remove("hidden");
        inactivePlayer.gameboard.display.squares[x][y].classList.add("hidden");
      }
    }
  });
});
