import { screen, Region, mouse, Image } from "@nut-tree/nut-js";
import Jimp from 'jimp';

export default async function printScreen():Promise<string>{
  const currentPosition = await mouse.getPosition();
  const width = 200;
  const height = 200;
  try {
    const screenshot = await screen.grabRegion(new Region(currentPosition.x - width / 2, currentPosition.y - height / 2, width, height));
    const screenshotRGB = await screenshot.toRGB();
    const image = new Jimp({data:screenshotRGB.data, width, height});
    const string = await image.getBase64Async(Jimp.MIME_PNG);
    const imageToFront = string.replace('data:image/png;base64,', '');
    return imageToFront;
  } catch (error) {
    console.log(error);
    return '';
  }
  
}