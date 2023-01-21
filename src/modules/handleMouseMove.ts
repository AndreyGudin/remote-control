import * as WebSocket from "ws";
import { mouse, left, right, up, down } from "@nut-tree/nut-js";
import drawSquare from "./drawSquare";
import drawRectangle from "./drawRectangle";

export default async function handleRequest(
  data: WebSocket.RawData
): Promise<string> {
  const [operation, px1, px2] = data.toString().split(" ");
  switch (operation) {
    case "mouse_right":
      await mouse.move(right(+px1));
      return `${operation}`;
    case "mouse_left":
      await mouse.move(left(+px1));
      return `${operation}`;
    case "mouse_up":
      await mouse.move(up(+px1));
      return `${operation}`;
    case "mouse_down":
      await mouse.move(down(+px1));
      return `${operation}`;
    case "mouse_position":
      const position = await mouse.getPosition();
      return `${operation} ${position.x},${position.y}`;
    case "draw_square":
      await drawSquare(+px1);
      return `${operation}`;
    case "draw_rectangle":
      await drawRectangle(+px1, +px2);
      return `${operation}`;
    default:
      console.log("Invalid command");
      return `Invalid command`;
  }
}
