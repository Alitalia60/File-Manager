import { createHash } from 'node:crypto';
import fs from 'node:fs';

/**
* calculate hash of fileURI 
* @function hash 
* @param: {string} fileURI
*/
export const hash = async (fileURI) => {

  const hash256 = createHash('sha256');
  hash256.setEncoding('hex');
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
          fileRS.pipe(hash256)
            .pipe(process.stdout)
            .on('error', (err) => rej(err));
        }
      }
    })
  });
}
