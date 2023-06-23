const childname = require('./02_require_parent'); 
// this parent module export some variable indepedently 
// noe this able to console

console.log(childname);
// but here childname contains some of the values because of we send value to the server as node global 