/**
* @function parseCmd 
* @param: {string} data
* @returns {object}
*/
export const parseCmd = (data) => {
  let args = [];
  if (data.includes('\'') || data.includes('\"')) {
    data = data.replace('\'', '\"');
    args = data.split(` "`);
    for (let index = 0; index < args.length; index++) {
      args[index] = args[index].replace('\'', '');
      args[index] = args[index].replace('\"', '');
    }
  } else {
    args = data.split(' ').filter((element) => element);
  }
  return { cmd: args[0], argsList: args.slice(1) }
}

