import "./styles.css";
import { players } from "./gameplay";
import { DOMGameboard } from "./DOMgameboard";

players.forEach((player) => {
  new DOMGameboard(player);
});
