import { mouse, Button, Point, right } from "@nut-tree/nut-js";

export default async function drawCircle(r: number) {

  let currentPosition = await mouse.getPosition();
  let nextPosition = new Point(currentPosition.x, currentPosition.y);
  let angle, x1, y1 = 0;
  for (let i = 0; i < 360; i += 0.1) {
    if (i === 0.1) await mouse.pressButton(Button.LEFT);
    angle = i;
    x1 = r * Math.cos(angle * Math.PI / 180);
    y1 = r * Math.sin(angle * Math.PI / 180);
    nextPosition.x = currentPosition.x + x1;
    nextPosition.y = currentPosition.y + y1;
    await mouse.setPosition(nextPosition);
  }
  await mouse.releaseButton(Button.LEFT);
}
;