import * as cmdAction from '../cmd-actions/fs-action.js'
export const fcOptions = {
  currentDir: null,
  currentUser: null,
}

export const messages = {
  welcome: '    Welcome to the File Manager, ',
  bye: '    Thank you for using File Manager, ',
  homeFolder: '    You are currently in ',
  invalidCommand: '    Invalid input',
  failed: '    Operation faled'
}

export const commandsList = {
  up: [cmdAction.up, 0],
  cd: [cmdAction.cd, 1],
  ls: [cmdAction.ls, 0],
  cat: [cmdAction.cat, 1], //Read file and print it's content in console:
  add: [cmdAction.add, 1], //Create empty file in current working directory:
  rn: [cmdAction.rn, 2], //rn path_to_file new_filename
  cp: [cmdAction.cp, 2], //cp path_to_file path_to_new_directory
  mv: [cmdAction.mv, 2],
  rm: [cmdAction.rm, 1],
  os: [cmdAction.os, 2],
  hash: [cmdAction.hash, 1],
  compress: [cmdAction.compress, 1],
  decompress: [cmdAction.decompress, 1],
}