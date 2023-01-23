import * as WebSocket from "ws";
import { mouse, left, right, up, down } from "@nut-tree/nut-js";
import drawSquare from "./drawSquare";
import drawRectangle from "./drawRectangle";
import drawCircle from "./drawCircle";
import printScreen from "./printScreen";

export default async function handleRequest(
  websocket:WebSocket.WebSocket ,
  data: WebSocket.RawData
): Promise<string> {
  const [operation, px1, px2] = data.toString().split(" ");
  switch (operation) {
    case "mouse_right":
      await mouse.move(right(+px1));
      return `${operation}_${px1}`;
    case "mouse_left":
      await mouse.move(left(+px1));
      return `${operation}_${px1}`;
    case "mouse_up":
      await mouse.move(up(+px1));
      return `${operation}_${px1}`;
    case "mouse_down":
      await mouse.move(down(+px1));
      return `${operation}_${px1}`;
    case "mouse_position":
      const position = await mouse.getPosition();
      return `${operation} ${position.x},${position.y}`;
    case "draw_square":
      await drawSquare(+px1);
      return `${operation}_${px1}`;
    case "draw_rectangle":
      await drawRectangle(+px1, +px2);
      return `${operation}_${px1}_${px2}`;
    case "draw_circle":
      await drawCircle(+px1);
      return `${operation}_${px1}`;
    case "prnt_scrn":
      const screenshot = await printScreen();
      return `${operation} ${screenshot}`;
    default:
      console.log("Invalid command");
      return `Invalid command`;
  }
}
