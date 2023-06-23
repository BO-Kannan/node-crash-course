const names = ['mugesh','kannan','kabilash','munees'];
console.log(names);

// module.exports = "parameter";  -->    // this is also a method to pass defined values for module

module.exports = names;
// by module.exports method we send the module to global node server module
// this acces by file which run by node extension