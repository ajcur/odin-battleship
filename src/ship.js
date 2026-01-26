class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit++;
    if (this.#isSunk()) {
      this.sunk = true;
    }
  }

  #isSunk() {
    return this.timesHit >= this.length;
  }
}

export { Ship };
