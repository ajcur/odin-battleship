import { Player } from "./player";

const player1 = new Player("A", "human");
const player2 = new Player("B", "computer");

let players = [player1, player2];

player1.gameboard.placeShipsRandomly();
player2.gameboard.placeShipsRandomly();

// player1.gameboard.placeShip(2, 0, 0, "horizontal");
// player1.gameboard.placeShip(2, 0, 7, "horizontal");
// player1.gameboard.placeShip(2, 2, 4, "vertical");
// player1.gameboard.placeShip(1, 2, 6, "horizontal");
// player1.gameboard.placeShip(1, 2, 8, "horizontal");
// player1.gameboard.placeShip(1, 4, 2, "horizontal");
// player1.gameboard.placeShip(4, 6, 5, "vertical");
// player1.gameboard.placeShip(3, 6, 7, "horizontal");
// player1.gameboard.placeShip(3, 7, 0, "horizontal");
// player1.gameboard.placeShip(1, 9, 8, "horizontal");

// player2.gameboard.placeShip(1, 0, 5, "horizontal");
// player2.gameboard.placeShip(1, 2, 2, "horizontal");
// player2.gameboard.placeShip(3, 3, 4, "horizontal");
// player2.gameboard.placeShip(3, 3, 8, "vertical");
// player2.gameboard.placeShip(1, 5, 0, "horizontal");
// player2.gameboard.placeShip(2, 5, 5, "horizontal");
// player2.gameboard.placeShip(2, 6, 2, "horizontal");
// player2.gameboard.placeShip(4, 7, 5, "horizontal");
// player2.gameboard.placeShip(2, 8, 0, "vertical");
// player2.gameboard.placeShip(1, 9, 2, "horizontal");

export { player1, player2, players };
