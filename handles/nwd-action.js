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
* @param: {string} dirName
*/
export const changeFolder = async (dirName) => {

  return await new Promise((res, rej) => {
    try {
      process.chdir(path.resolve(fcOptions.currentDir, dirName));
      fcOptions.currentDir = path.resolve(fcOptions.currentDir, dirName);
      res();
    } catch (err) {
      rej(err);
    }
  });
}

