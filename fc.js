import { createInterface } from 'node:readline';

import { messages, fcOptions } from './lib/constants.js';
import { parseCmd } from './lib/cmd-parsing.js';
import './lib/init.js'
import { showCurrentDir } from './lib/utils.js';
import { showError } from './lib/errors.js';

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
    parseCmd(data)
      .then((value) => {
        const { cmdToExec, argList } = value;
        cmdToExec(...argList)
          .then(() => {
            showCurrentDir();
            rl.prompt()
          })
          .catch(err => {
            console.log('cmdToExec error ', err);
            rl.prompt()
          });
        ;
      })
      .catch((err) => {
        // showError(err);
        showError('fail');
        showCurrentDir();
        rl.prompt()
      });
  };
})

