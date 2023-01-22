import { screen, Region, mouse, Image } from "@nut-tree/nut-js";
import Jimp from 'jimp';

export default async function printScreen():Promise<string>{
  const currentPosition = await mouse.getPosition();
  const screenshot = await screen.grabRegion(new Region(currentPosition.x, currentPosition.y, 200, 200));
  const image = new Jimp({data:screenshot.data, width: 200, height: 200});
  const string = await image.getBase64Async(Jimp.MIME_PNG);
  const imageToFront = string.replace('data:image/png;base64,', '');
  return imageToFront
}