const fileSystem = require('fs');
// create file using fs and function parameters are filename and content of the page

fileSystem.writeFileSync('test.txt',' ',(err)=>{
    if (err) throw err;
});
// this function rewrite the file 
