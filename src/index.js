import "./styles.css";
import { startGame, setupGame } from "./runGame.js";
import { Player } from "./player.js";

const newGameBtn = document.querySelector("#new-game-button");
const OkBtn = document.querySelector("#ok-button");
const shuffleBtn = document.querySelector("#shuffle-button");
const startBtn = document.querySelector("#start-button");
const newGameDialog = document.querySelector("#new-game-window");
const player1NameLabel = document.querySelector("#p1-name-label");
const player2NameLabel = document.querySelector("#p2-name-label");
const player1NameInput = document.querySelector("#player-1-name");
const player2NameInput = document.querySelector("#player-2-name");
const vsOtherPlayerRadioBtn = document.querySelector("#vs-other-player");
const vsComputerRadioBtn = document.querySelector("#vs-computer");

let players;

newGameBtn.addEventListener("click", () => {
  newGameDialog.showModal();
});

vsOtherPlayerRadioBtn.addEventListener("change", () => {
  player2NameLabel.hidden = false;
  player2NameInput.hidden = false;
  player1NameLabel.textContent = "Player 1 Name:";
});

vsComputerRadioBtn.addEventListener("change", () => {
  player2NameLabel.hidden = true;
  player2NameInput.hidden = true;
  player1NameLabel.textContent = "Player Name:";
});

OkBtn.addEventListener("click", () => {
  let player1 = new Player(player1NameInput.value, "human");
  let player2;

  if (vsOtherPlayerRadioBtn.checked) {
    player2 = new Player(player2NameInput.value, "human");
  } else {
    player2 = new Player("Computer", "computer");
  }

  players = [player1, player2];
  setupGame(players);
});

shuffleBtn.addEventListener("click", () => {
  players.forEach((player) => {
    player.gameboard.placeShipsRandomly();
    player.gameboard.display.renderAllSquares();
  });
});

startBtn.addEventListener("click", () => {
  shuffleBtn.disabled = true;
  startGame(players);
});
