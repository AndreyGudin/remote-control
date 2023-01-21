import * as WebSocket from "ws";
import { mouse, left, right, up, down } from "@nut-tree/nut-js";
import drawSquare from "./drawSquare";

export default async function handleRequest(
  data: WebSocket.RawData
): Promise<string> {
  const [operation, px] = data.toString().split(" ");
  switch (operation) {
    case "mouse_right":
      await mouse.move(right(+px));
      return `${operation}`;
    case "mouse_left":
      await mouse.move(left(+px));
      return `${operation}`;
    case "mouse_up":
      await mouse.move(up(+px));
      return `${operation}`;
    case "mouse_down":
      await mouse.move(down(+px));
      return `${operation}`;
    case "mouse_position":
      const position = await mouse.getPosition();
      return `${operation} ${position.x},${position.y}`;
    case "draw_square":
      await drawSquare(+px) ;
    default:
      console.log("Invalid command");
      return `Invalid command`;
  }
}
