import { showError } from '../utils/errors.js';

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
  try {
    process.chdir(dirNAme);
  } catch (err) {
    // console.error(`chdir: ${err}`);
    showError(`chdir: ${err}`)
  }
}

