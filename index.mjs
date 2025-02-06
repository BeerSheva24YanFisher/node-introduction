import logger from './logger.mjs';
import logDistribution from './logDistribution.mjs';
import logFilter from './logFilter.mjs';

logger.log('info', 'Hello world!');
logger.log('info', 'This is a test message!');
logger.log('info1', 'Hello world1!');
logger.log('info1', 'This is a test message1!');
logger.log('info', 'Another hello message!');

console.log('Message distribution:', logDistribution.getDistribution());

console.log(
  'Messages with level "info" containing "hello":',
  logFilter.getMessagesByLevelAndKeyword('info', 'hello')
);

console.log(
  'Messages with level "info1" containing "hello":',
  logFilter.getMessagesByLevelAndKeyword('info1', 'hello')
);




// console.log(global);
// (function(exports, __dirname, __filename, require, module){
//  //code   
// })();

// const {logger} = require('./logger.cjs');
// logger.log("kuku");
// console.log(logger);

//console.log(process);

// const path = require('node:path');
// console.log(path.parse(__filename));