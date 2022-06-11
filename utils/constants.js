import * as fsAction from '../handles/fs-action.js'
import * as osAction from '../handles/os-action.js'
import * as hashAction from '../handles/hash-action.js'
import * as dirAction from '../handles/dir-action.js'
import * as zipAction from '../handles/zip-action.js'
export const fcOptions = {
  currentDir: null,
  currentUser: null,
}

export const messages = {
  welcome: 'Welcome to the File Manager, ',
  bye: 'Thank you for using File Manager, ',
  homeFolder: 'You are currently in ',
  invalidCommand: 'Invalid input',
  failed: 'Operation faled'
}

export const commandsList = {
  up: { action: dirAction.upFolder, minArgs: 0 },
  cd: { action: dirAction.changeFolder, minArgs: 1 },
  ls: { action: fsAction.ls, minArgs: 0 },
  cat: { action: fsAction.cat, minArgs: 1 },
  add: { action: fsAction.add, minArgs: 1 },
  rn: { action: fsAction.rn, minArgs: 2 },
  cp: { action: fsAction.cp, minArgs: 2 },
  mv: { action: fsAction.mv, minArgs: 2 },
  rm: { action: fsAction.remove, minArgs: 1 },
  os: { action: osAction.osInfo, minArgs: 1, prefix: '--' },
  hash: { action: hashAction.hash, minArgs: 1 },
  compress: { action: zipAction.compress, minArgs: 2 },
  decompress: { action: zipAction.decompress, minArgs: 2 },
}