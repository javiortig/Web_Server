const EventEmitter = require('events');

const emisorProductos = new EventEmitter();
emisorProductos.on('Event1', () => {
    console.log("Event1");
});
//Podemos emitir el evento donde lo necesitemos con
emisorProductos.emit('Event1');