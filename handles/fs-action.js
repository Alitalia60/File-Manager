import fs from 'node:fs';
import { stdout } from 'process';
import { pipeline } from 'stream';
import { fcOptions } from '../utils/constants.js';
import { showError } from '../utils/errors.js';

/**
* print file to console 
* @function cat 
* @param: {string} fileURI
*/
export const cat = async (fileURI) => {
  
  // TODO check fileURI exist

  const fileRS = fs.createReadStream(fileURI);
  pipeline(fileRS, stdout, (err) => {
    if (err) {
      showError(`erorr cat-command, ${err.code}`)
    }
  })
}

/**
* make copy of file 
* @function cp 
* @param: {string} source 
* @param: {string} target - name of copy
*/
export const cp = async (source, target) => {
  
  // TODO check source exist

  fs.cp(source, target, (err) => {
    if (err) {
      console.error('ls ', err.code);
    } else {
      console.log('...file copied successfully.');
    }
  })
}

/**
* print list of files to console 
* @function ls 
*/
export const ls = async () => {
  fs.readdir(fcOptions.currentDir, (err, files) => {
    if (err) {
      console.error('ls ', err.code);
    }
    // console.table(files);
    for (const file of files) {
      console.log(file);
    }
  });
}

/**
* move file to new dir
* @function mv 
* @param: {string} source - old place
* @param: {string} target - new place
*/
export const mv = async (source, target) => {
  
  // TODO check source exist

  fs.cp(source, target, (err) => {
    if (err) {
      showError(`Error moving ${source} ${err.code}`)
    } else {
      fs.rm(source, (err) => {
        if (err) {
          showError(`Error moving ${source} ${err.code}`)
        }
        else {
          console.log('...file moved successfully.');
        }
      });
    }
  })
}

/**
* remove file  
* @function rm 
* @param: {string} fileURI
*/
export const rm = async (fileURI) => {
  
  // TODO check source exist

  fs.rm(fileURI, (err) => {
    if (err) {
      showError(`Error removing ${fileURI} ${err.code}`)
    } else {
      console.log('...file removed successfully.');
    }
  });
}

/**
* print file to console 
* @function rn 
* @param: {string} source - old name
* @param: {string} target - new name
*/
export const rn = async (source, target) => {
  
  // TODO check source exist
  
  fs.rename(source, target, (err) => {
    if (err) {
      showError(`Error renaming ${fileURI} ${err.code}`)
    }
    else{
      console.log('...file renamed successfully.');
    }
  });
}

/**
 * create file in current dir
 * @function add 
 * @param: {string} fileName 
 */
export const add = async (fileName) => {
  
  fs.appendFile(fileName, '', (err) => {
    if (err) {
      showError(`Error create ${fileName} ${err.code}`)
    }else{
      console.log('...file created successfully.');
    }
  })
}