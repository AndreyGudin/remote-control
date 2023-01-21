import * as WebSocket from "ws";
import { mouse, left, right, up, down } from "@nut-tree/nut-js";

export default async function handleMouseMove(
  data: WebSocket.RawData
): Promise<string> {
  const [direction, px] = data.toString().split(" ");
  switch (direction) {
    case "mouse_right":
      await mouse.move(right(+px));
      return `${direction}`;
    case "mouse_left":
      await mouse.move(left(+px));
      return `${direction}`;
    case "mouse_up":
      await mouse.move(up(+px));
      return `${direction}`;
    case "mouse_down":
      await mouse.move(down(+px));
      return `${direction}`;
    case "mouse_position":
      const position = await mouse.getPosition();
      return `${direction} ${position.x},${position.y}`;
    default:
      console.log("Invalid command");
      return `Invalid command`;
  }
}
