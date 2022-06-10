import { fcOptions, messages } from './constants.js';

/**
* @function showCurrentDir 
*/
export const showCurrentDir = ()=> {
  console.log(`${messages.homeFolder}${fcOptions.currentDir}\n`);
}

/**
* @function sayBye 
*/
export function sayBye() {
  rl.setPrompt('');
  console.log(`${messages.bye}`);
  rl.close();
}
