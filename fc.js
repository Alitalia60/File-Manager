import { createInterface } from 'node:readline';

import { messages, commandsList, fcOptions } from './utils/constants.js';
import { parseCmd } from './utils/cmd-parse.js';
import './utils/init.js'
import { showCurrentDir } from './utils/utils.js';
import { validateCmd } from './validators/cmd-validate.js';
import { showError } from './utils/errors.js';
import { SourceMap } from 'node:module';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'FC>> '
});

rl.prompt();

rl.on('close', () => {
  rl.setPrompt('');
  console.log(`${messages.bye}`);
  rl.close();
});

rl.on('line', (data) => {
  data = data.toString().trimEnd();
  if (data === '.exit') {
    rl.close();
  } else {
    const cmdWithArgs = parseCmd(data);
    if (cmdWithArgs.cmd) {

      //!! debug -----------------
      // console.log('cmdWithArgs=', cmdWithArgs);

      if (validateCmd(cmdWithArgs)) {
        commandsList[cmdWithArgs.cmd]['action'](...cmdWithArgs.argsList)
          .then((data) => console.log('...then', data))
          .catch(err => {
            console.log('...catch');
            showError(err)
          })
          .finally(() => {
            console.log('...finally');
            showCurrentDir();
            rl.prompt()
          });
      }
    } else {
      showCurrentDir();
      rl.prompt();
    };
  };
})

