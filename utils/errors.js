import { messages } from './constants.js'

export const showError = (mess = '') => {
  if (mess) {
    console.log(`${mess}\n`);
  }
  console.log(`${messages.failed}\n`);
}