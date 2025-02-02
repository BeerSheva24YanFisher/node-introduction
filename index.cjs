// console.log(global);
// (function(exports, __dirname, __filename, require, module){
//  //code   
// })();

// const {logger} = require('./logger.cjs');
// logger.log("kuku");
// console.log(logger);

//console.log(process);

const path = require('node:path');
console.log(path.parse(__filename));