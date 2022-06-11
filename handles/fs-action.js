// import fs from 'node:fs';
import * as fsPromices from 'node:fs/promises';
import fs from 'node:fs';
import { fcOptions } from '../utils/constants.js';

/**
* print file to console 
* @function cat 
* @param: {string} fileURI
*/
export const cat = async (fileURI) => {

  return await new Promise((res, rej) => {
    fs.stat(fileURI, (err, stats) => {
      if (err) {
        rej(err)
      }
      else {
        if (!stats.isFile()) {
          rej(`${fileURI}not a file`)
        } else {
          const fileRS = fs.createReadStream(fileURI);
          fileRS.on('close', () => {
            res()
          });
          fileRS.pipe(process.stdout)
            .on('error', (err) => rej(err));
        }
      }
    })
  });
}

/**
* make copy of file 
* @function cp 
* @param: {string} source 
* @param: {string} target - name of copy
*/
export const cp = async (source, target) => {
  return await fsPromices.cp(source, target);
}

/**
* print list of files to console 
* @function ls 
*/
export const ls = async () => {
  const files = await fsPromices.readdir(fcOptions.currentDir);
  for (const file of files) {
    console.log(file);
  }
}

/**
* move file to new dir
* @function mv 
* @param: {string} source - old place
* @param: {string} target - new place
*/
export const mv = async (source, target) => {
  return await fsPromices.cp(source, target).then(fsPromices.rm(source));
}

/**
* remove file  
* @function remove 
* @param: {string} fileURI
*/
export const remove = async (fileURI) => {
  return await fsPromices.rm(fileURI);
}

/**
* print file to console 
* @function rn 
* @param: {string} source - old name
* @param: {string} target - new name
*/
export const rn = async (source, target) => {
  return await fsPromices.rename(source, target);

}

/**
 * create file in current dir
 * @function add 
 * @param: {string} fileName 
 */
export const add = async (fileName) => {
  return await fsPromices.appendFile(fileName, '')
}