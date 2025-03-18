//To interact with a built-in module, we just need to require it without('./').

//os module(Operation System)
const operSys = require('os');

// const { userInfo } = require('os'); //We use this if you know what property you want to use from the os module

//info about current user
const user = operSys.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${operSys.uptime()} seconds`);

const currentOS =
{
    name: operSys.type(), //Returns the operating system name
    release: operSys.release(), //Returns the operating system release
    totalMem: operSys.totalmem(), //Returns the total system memory in bytes
    freeMem: operSys.freemem() //Returns the free system memory in bytes
}

console.log(currentOS);