import os from 'node:os';

export const osInfo = async (additionalArg) => {
  switch (additionalArg) {
    case '--EOL':
      // os.EOL
      switch (os.EOL.charCodeAt(0)) {
        case 10:
          console.log('\\n');
          break;
        case 13:
          console.log('\\r');
          break;
        default:
          break;
      }
      break;
    case '--cpus':
      const info = os.cpus();
      console.log('Overall amount of CPUS =', info.length);
      console.table(info);
      // for (const cpu of info) {
      //   console.log(cpu.model);
      // }
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--architecture':
      console.log(os.arch());
      break;

    default:
      break;
  }
}