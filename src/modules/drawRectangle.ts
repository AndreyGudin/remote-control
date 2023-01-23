import { mouse, left, right, up, down, Button, Point } from "@nut-tree/nut-js";

export default async function drawRectangle(px1: number, px2: number) {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(px1));
  await mouse.move(right(px2));
  await mouse.move(up(px1));
  await mouse.move(left(px2));
  await mouse.releaseButton(Button.LEFT);
}
