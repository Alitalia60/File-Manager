import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

/**
* compress source to target 
* @function compress 
* @param: {string} source
* @param: {string} target
*/
export const compress = async (source, target) => {

  // TODO check source exist

  const sourceRS = createReadStream(source);
  const targetWS = createWriteStream(target);

  const compressStream = createBrotliCompress();
  sourceRS.pipe(compressStream)
    .on('error', (err) => console.log(err))
    .pipe(targetWS)
    .on('error', (err) => console.log(err));
}

/**
* decompress source to target 
* @function decompress 
* @param: {string} source
* @param: {string} target
*/
export const decompress = async (source, target) => {

  // TODO check source exist

  const sourceRS = createReadStream(source);
  const targetWS = createWriteStream(target);

  const deCompressStream = createBrotliDecompress();
  sourceRS.pipe(deCompressStream)
    .on('error', (err) => console.log(err))
    .pipe(targetWS)
    .on('error', (err) => console.log(err));
}

