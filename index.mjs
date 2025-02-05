import logger from './logger.mjs';

class MainController {
  constructor() {
    logger.on('message', (data) => {
      console.log(`[LOG]: ${data.level.toUpperCase()} - ${data.message}`);
    });

    logger.on('error', (msg) => {
      console.error(`[ERROR]: ${msg}`);
    });
  }

  run() {
    logger.log('info', 'Запуск приложения');
    
    try {
      this.doSomething();
    } catch (error) {
      logger.log('error', `Ошибка в doSomething: ${error.message}`);
    }
  }

  doSomething() {
    logger.log('debug', 'Выполняется doSomething...');
    
    if (Math.random() > 0.5) {
      throw new Error('Случайная ошибка');
    }

    logger.log('info', 'doSomething выполнен успешно');
  }
}

const app = new MainController();
app.run();






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