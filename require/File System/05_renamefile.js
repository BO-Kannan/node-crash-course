var fs = require('fs');


fs.rename('test.txt','output.txt',function(err){
    if(err) throw err;
})
// function rename used to rename file in directories 