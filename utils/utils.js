import { fcOptions, messages, logColors } from './constants.js';

/**
* @function showCurrentDir 
*/
export const showCurrentDir = () => {
  console.log(logColors.yellow, `${messages.homeFolder}${fcOptions.currentDir}\n`);
  console.log(logColors.white);
}

export const colorMessage = (color, mess) => {
  console.log(color, mess);
}