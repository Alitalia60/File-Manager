import { commandsList } from '../utils/constants.js';
import { showError } from '../utils/errors.js';

/**
* @function validateCmd 
* @param: {object} cmdWithArgs - {cmd: string, argList:[array]}
* @returns {boolean}
*/
export const validateCmd = (cmdWithArgs) => {
  const command = cmdWithArgs.cmd;
  const argList = cmdWithArgs.argsList;

  if (!Object.keys(commandsList).includes(command)) {
    showError(`Wrong command < ${command} >`);
    return false;
  }
  if (argList.length < commandsList[command]['minArgs']) {
    showError(`Wrong or missing argument(s) for < ${command} >`);
    return false
  }
  if (commandsList[command]['prefix'] && argList[0]) {
    if (!argList[0].startsWith(commandsList[command]['prefix'])) {
      showError(`Wrong or absent argument for < ${command} >`);
      return false
    }
  };
  return true;
};


