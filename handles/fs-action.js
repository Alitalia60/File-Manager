// import fs from 'node:fs';
import * as fsPromices from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { stdout } from 'process';
import { pipeline } from 'node:stream/promises';
import { fcOptions } from '../utils/constants.js';
import { showError } from '../utils/errors.js';

/**
* print file to console 
* @function cat 
* @param: {string} fileURI
*/
export const cat = async (fileURI) => {
  // TODO check source exist
  return new Promise((res, rej) => {
    try {
      const sourceRS = createReadStream(fileURI)
        .on('error', (err) => {
          console.log('createReadStream eror');
          rej(err);
          return;
        })
        .on('ready', () => {
          sourceRS.pipe(stdout)
            .on('error', (err) => {
              console.log('pipe eror');
              rej(err)
            })
            .on('end', ()=>console.log('end'));
        });
    } catch (err) {
      rej(err);
      return;
    };
  });

  // const fileRS = createReadStream(fileURI);
  // return pipeline(fileRS, stdout);
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