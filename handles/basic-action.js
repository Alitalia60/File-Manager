import fs from 'node:fs';
import * as fsPromices from 'node:fs/promises';
import path, { basename } from 'node:path';
import { fcOptions } from '../utils/constants.js';

/**
* print file to console 
* @function cat 
* @param: {string} fileURI
*/
export const cat = async (fileURI) => {

  return await new Promise((res, rej) => {
    fs.createReadStream(fileURI)
      .on('error', (err) => rej(err))
      .on('close', () => res())
      .pipe(process.stdout)
      .on('error', (err) => rej(err));
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
  console.table(files);
}

/**
* move file to new dir
* @function mv 
* @param: {string} source - file to move
* @param: {string} target - new place
*/
export const mv = async (source, target) => {

  const sourcePath = path.resolve(source);
  const targetPath = path.join(path.resolve(target), source);
  console.log('sourcePath=', sourcePath, 'dirname=', path.dirname(sourcePath));
  console.log('targetPath=', targetPath, 'dirname=', path.dirname(targetPath));

  return await new Promise((res, rej) => {
    if (path.dirname(sourcePath) === path.dirname(targetPath)) {
      console.log(`can't copy to itself`);
      rej(`can't copy to itself`)
    }
    else {
      fs.copyFile(sourcePath, targetPath, (err) => {
        if (err) rej(err)
        else {
          fs.rm(sourcePath, err => rej(err));
          res();
        };
      });
    }
  });
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