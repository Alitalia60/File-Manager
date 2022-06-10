import { messages } from './constants.js'

export const showError = (mess = '') => {
  if (mess) {
    console.log(`${messages.failed}   (${mess})\n`);
  }
  else{
    console.log(`${messages.failed}\n`);
  }
}