import { messages, logColors } from './constants.js'

export const showError = (mess = '') => {
  if (mess) {
    // console.log(`${messages.failed}   (${mess})\n`);
    console.error(logColors.red, `${messages.failed}   (${mess})\n`);

  }
  else {
    // console.log(`${messages.failed}\n`);
    console.error(logColors.red, `${messages.failed}\n`);

  }
}
