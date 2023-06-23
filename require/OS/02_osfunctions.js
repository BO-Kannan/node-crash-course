const os = require('os');

// these are some function to access system os
console.log("Which Platform ",os.platform());
console.log("Os Architecture ",os.arch());
console.log("Constants ",os.constants);
console.log("Array in CPU memory ",os.cpus());
console.log("Endianness of CPU ",os.endianness());
console.log("OS Hostname ",os.hostname());
console.log("Os Networkinterface ",os.networkInterfaces());
console.log("Os Release ",os.release());
console.log("Temperary Directories ",os.tmpdir());
console.log("Total Memory",os.totalmem());
