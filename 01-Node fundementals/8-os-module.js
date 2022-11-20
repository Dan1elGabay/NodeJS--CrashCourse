'use strict';
const os = require('os') //*built in modules

//* info about current user - computer's operating system:




// method return the system uptime in seconds
console.log();

const currentOS = {
    name: os.type(),
    userInfo: os.userInfo(),
    hostName:os.hostname(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    Platform:os.platform(),
    Architecture:os.arch(),
    upTime:`the system uptime is ${os.uptime()} seconds`,
    networkInterfaces:os.networkInterfaces(),
}
console.log(currentOS);
