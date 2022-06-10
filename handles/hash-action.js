import { showCurrentDir } from '../utils/utils.js'

/**
* calculate hash of fileURI 
* @function hash 
* @param: {string} fileURI
*/
export const hash = async (fileURI) => {
  const hash = createHash('sha256');
  const input = createReadStream(fileURI);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
}