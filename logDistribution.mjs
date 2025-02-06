import logger from './logger.mjs';

class LogDistribution {
  #distribution = {};

  constructor() {
    logger.on('message', (message) => {
      const { level } = message;
      this.#distribution[level] = (this.#distribution[level] || 0) + 1;
    });
  }

  getDistribution() {
    return this.#distribution;
  }
}

const messageDistribution = new LogDistribution();
export default messageDistribution;