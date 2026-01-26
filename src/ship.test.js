import { Ship } from "./ship.js";

test("Ship can be created", () => {
  let test = new Ship();
  expect(test).toBeTruthy();
});

test("Ship hit() increases timesHit property", () => {
  let test = new Ship(3);
  test.hit();
  expect(test.timesHit).toBe(1);
});

test("Ship recognizes when it's been sunk", () => {
  let test = new Ship(2);
  test.hit();
  test.hit();
  expect(test.sunk).toBe(true);
});

test("Ship recognizes when it's not yet been sunk", () => {
  let test = new Ship(3);
  test.hit();
  expect(test.sunk).toBe(false);
});
