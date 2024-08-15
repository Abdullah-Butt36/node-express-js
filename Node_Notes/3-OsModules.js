// Built-in Modules

// os stands for Operating system
const os = require('node:os');

// provide the information about Cpus
console.log(os.cpus());

// provide information about free memory
console.log(os.freemem());

// provide user info
console.log(os.userInfo());

// machine type
console.log(os.machine());

const CurrentOs = {
    name : os.type(),
    release : os.release(),
    freeMem : os.freemem(),
    totalmem : os.totalmem()
}

console.log(CurrentOs);