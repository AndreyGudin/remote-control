import { mouse, left, right, up, down, Button } from "@nut-tree/nut-js";

export default async function drawSquare(px:number) {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(px));
  await mouse.move(right(px));
  await mouse.move(up(px));
  await mouse.move(left(px));
  await mouse.releaseButton(Button.LEFT);
}