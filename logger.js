const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg:msg})
    }
}

const logger_demo = () => {
    const logger = new Logger();
    logger.on('message', data => console.log(`id: ${data.id} message: ${data.msg}`));

    logger.log('Hi there');
    logger.log('Hi Meszi');
    logger.log('Hi Ronaldo');
}

module.exports = logger_demo;