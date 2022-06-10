import path from 'node:path';
import os from 'node:os';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'node:url';

import { fcOptions, messages } from './constants.js';
import { showCurrentDir } from './utils.js';
import { changeFolder } from '../handles/dir-action.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
fcOptions.currentUser = process.argv[3].replace('--username=', '');
fcOptions.currentDir = path.join(os.homedir(), fcOptions.currentUser);

try {
  await mkdir(fcOptions.currentDir, { recursive: true });
} catch (err) {
  console.error(err);
}

console.log('************************************************');
console.log(`${messages.welcome}!`);
console.log('************************************************');

changeFolder(fcOptions.currentDir);
showCurrentDir();
