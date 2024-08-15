const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();


emitter.on('response', (name , id) => {
  console.log(`Hello ${name} Function no ${id} Event called `)
});

emitter.on('response' , () => {
  console.log(`Hello world number`);
})

emitter.emit('response', 'Abdullah' , 24)
