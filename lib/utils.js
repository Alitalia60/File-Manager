import { fcOptions, messages } from '../lib/constants.js';

export const showCurrentDir = ()=> {
  console.log(`${messages.homeFolder}${fcOptions.currentDir}\n`);
}

export function sayBye() {
  rl.setPrompt('');
  console.log(`${messages.bye}`);
  rl.close();
}
