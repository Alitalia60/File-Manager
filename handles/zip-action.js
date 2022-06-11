import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { stat, createReadStream, createWriteStream } from 'node:fs';

/**
* compress source to target 
* @function compress 
* @param: {string} source
* @param: {string} target
*/
export const compress = async (source, target) => {

  return await new Promise((res, rej) => {
    stat(source, (err, stats) => {
      if (err) {
        rej(err)
      }
      else {
        if (!stats.isFile()) {
          rej(`${source}not a file`)
        } else {
          const sourceRS = createReadStream(source);
          const targetWS = createWriteStream(target);
          const compressStream = createBrotliCompress();

          sourceRS.on('close', () => {
            res()
          });

          sourceRS.pipe(compressStream)
            .on('error', (err) => rej(err))
            .pipe(targetWS)
            .on('error', (err) => rej(err));
        }
      }
    })
  });
}

/**
* decompress source to target 
* @function decompress 
* @param: {string} source
* @param: {string} target
*/
export const decompress = async (source, target) => {

  return await new Promise((res, rej) => {
    stat(source, (err, stats) => {
      if (err) {
        rej(err)
      }
      else {
        if (!stats.isFile()) {
          rej(`${source}not a file`)
        } else {
          const sourceRS = createReadStream(source);
          const targetWS = createWriteStream(target);
          const deCompressStream = createBrotliDecompress();

          sourceRS.on('close', () => {
            res()
          });

          sourceRS.pipe(deCompressStream)
            .on('error', (err) => rej(err))
            .pipe(targetWS)
            .on('error', (err) => rej(err));
        }
      }
    })
  });
}


