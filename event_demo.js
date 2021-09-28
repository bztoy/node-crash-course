const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const even_demo = () => {
    const myEmitter = new MyEmitter();
    
    myEmitter.on('event', () => console.log('Event fired!')); 

    myEmitter.emit('event');
    myEmitter.emit('event');
    myEmitter.emit('event');
    myEmitter.emit('event');
}

module.exports = even_demo;