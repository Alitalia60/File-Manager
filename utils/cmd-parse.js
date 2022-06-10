/**
* @function parseCmd 
* @param: {string} data
* @returns {object}
*/
export const parseCmd = (data) => {
  const args = data.split(' ').filter((element) => element);
  return { cmd: args[0], argsList: args.slice(1) }
}

