import { exec } from 'child_process';
import fs from 'node:fs';
import path from 'path';
import { fcOptions } from '../lib/constants.js';
import { showCurrentDir } from '../lib/utils.js'

//*************************************
export const up = async () => {
  try {
    process.chdir('..');
    fcOptions.currentDir = process.cwd();
    showCurrentDir();

  } catch (error) {
    console.error(`chdir: ${err}`);
  }

}

//*************************************
export const cd = async () => {
  console.log('change dir');
}

//*************************************
export const cat = async (fileURI) => {
  console.log('print file');
  // const fileURI = path.join(fcOptions.currentDir, fileName);
  try {
    fs.readFile(fileURI);
  } catch (error) {
    if (error) {
      console.log('cat : ', error);
    }
  }
}

export const cp = async (source, target) => {
  console.log(`copy file ${source} to ${target}`);
  fs.cp(source, target, (err)=>{
    if (err) {
      console.error('ls ', err.code);
    }else
    {
      console.log('...Success.');
    }
  })
}

export const ls = async () => {
  console.log('list files in ', fcOptions.currentDir);
  fs.readdir(fcOptions.currentDir, (err, files) => {
    if (err) {
      console.error('ls ', err.code);
    }
    for (const file of files) {
      console.log(file);
    }
  });
}

export const mv = async () => {
  console.log('moveFile file');
}

export const read = async () => {
  console.log('read file');
}

export const rm = async () => {
  console.log('remove file');
}

export const rn = async () => {
  console.log('rename file');
}

export const add = async () => {
  console.log('create file');
}

export const hash = async () => {
  console.log('create file');
}

export const compress = async () => {
  console.log('compress file');
}

export const decompress = async () => {
  console.log('decompress file');
}

export const os = async () => {
  console.log('os info');
}