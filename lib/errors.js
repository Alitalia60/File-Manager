import { messages } from './constants.js'

export const showError = (mess='') => {
  if (mess) {
    console.log(`${mess}\n`);
  }
  else{
    console.log(`${messages.failed}\n`);
  }
}