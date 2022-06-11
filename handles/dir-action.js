import { showError } from '../utils/errors.js';
import path from 'node:path'
import { fcOptions } from '../utils/constants.js';
/**
* @function upFolder 
*/
export const upFolder = async () => {
  changeFolder('..');
}

/**
* @function changeFolder 
* @param: {string} dirNAme
*/
export const changeFolder = async (dirNAme) => {

  return await new Promise((res, rej) => {
    try {
      process.chdir(path.resolve(fcOptions.currentDir, dirNAme));
      fcOptions.currentDir = path.resolve(fcOptions.currentDir, dirNAme);
      res();
    } catch (err) {
      rej(err);
    }
  });
}

