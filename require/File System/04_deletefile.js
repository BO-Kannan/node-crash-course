var fs = require('fs');


fs.unlink('test.txt',function(err){
    if(err) throw err;
})
// function unlink used to removed file from directories 