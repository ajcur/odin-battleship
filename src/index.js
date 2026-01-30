import "./styles.css";
import { players } from "./runGame";
import { DOMGameboard } from "./DOMgameboard";

players.forEach((player) => {
  new DOMGameboard(player);
});
