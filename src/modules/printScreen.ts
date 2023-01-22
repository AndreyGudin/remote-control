import { screen, Region, mouse, Image } from "@nut-tree/nut-js";

export default async function printScreen():Promise<Image>{
  const currentPosition = await mouse.getPosition();
  return await screen.grabRegion(new Region(currentPosition.x, currentPosition.y, 200, 200));
}