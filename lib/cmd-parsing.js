import { commandsList, fcOptions } from './constants.js'
import { showError } from './errors.js'

export const parseCmd = async (data) => {
  return new Promise((res, rej) => {
    const args = data.split(' ').filter((element) => element);
    if (!Object.keys(commandsList).includes(args[0])) {
      rej();
    }
    else {
      const currentCommand = args[0];
      const argsNumber = commandsList[currentCommand][1];
      if (args.slice(1).length === argsNumber) {
        res({ cmdToExec: commandsList[currentCommand][0], argList: args.slice(1) });
      }
      else {
        rej(`    Warning!!:  command < ${args[0]} > require ${argsNumber} argument(s)`);
      };
    };
  });
}

