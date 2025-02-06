import logger from './logger.mjs';

class LogFilter {
  #messages = [];

  constructor() {
    logger.on('message', (message) => {
      this.#messages.push(message);
    });
  }

  getMessagesByLevelAndKeyword(level, keyword) {
    return this.#messages.filter(
      (msg) =>
        msg.level === level &&
        msg.message.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}

const messageFilter = new LogFilter();
export default messageFilter;