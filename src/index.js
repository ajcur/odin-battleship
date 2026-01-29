import "./styles.css";
import { players } from "./gameplay";
import { DOMGameboard } from "./renderUI";

players.forEach((player) => {
  new DOMGameboard(player);
});
