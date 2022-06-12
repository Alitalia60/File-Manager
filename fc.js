import { createInterface } from 'node:readline';

import { messages, commandsList, logColors } from './utils/constants.js';
import { parseCmd } from './utils/cmd-parse.js';
import './utils/init.js'
import { showCurrentDir } from './utils/utils.js';
import { validateCmd } from './validators/cmd-validate.js';
import { showError } from './utils/errors.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'File Manager >> '
});

rl.prompt();

rl.on('close', () => {
  rl.setPrompt('');
  console.log(logColors.blue, `${messages.bye}`);
  console.log(logColors.white);
  rl.close();
});

rl.on('line', (data) => {
  data = data.toString().trimEnd();
  if (data === '.exit') {
    rl.close();
  } else {
    const cmdWithArgs = parseCmd(data);

    // !! debug
    // console.log(cmdWithArgs);
    // !! debug

    if (cmdWithArgs.cmd) {
      if (validateCmd(cmdWithArgs)) {
        commandsList[cmdWithArgs.cmd]['action'](...cmdWithArgs.argsList)
          .then(() => console.log(logColors.green, 'Success'))
          .catch(err => {
            showError(err);
          })
          .finally(() => {
            console.log('');
            showCurrentDir();
            rl.prompt();
          });
      } else {
        showCurrentDir();
        rl.prompt();
      };
    } else {
      showCurrentDir();
      rl.prompt();
    };
  };
})

