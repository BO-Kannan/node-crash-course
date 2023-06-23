const fileSystem = require('fs');

// create file using fs and function parameters are filename and content of the page ?
fileSystem.writeFile('test.txt','test',(err)=>{
    if (err) throw err;
});

// fileSystem.appendFile('test.txt','test',(err)=>{
//     if (err) throw err;
// });

// fileSystem.open('test.txt','test',(err)=>{
//     if (err) throw err;
// });
// these are other some function to create the file in file system 
// writefile function only able to create the file 
