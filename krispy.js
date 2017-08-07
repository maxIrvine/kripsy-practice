const events = require('events');
const ws = require('ws');
const fs = require('fs');
const server = new ws.Server({port:8080});
let myEmitter = new events.EventEmitter();



myEmitter.on('are-there-donuts', () => {
    var donuts = checkDonuts();
    if (donuts) {
        myEmitter.emit('go-get-donuts');
    } else {
        myEmitter.emit('no-donuts');
    }
});

myEmitter.on('go-get-donuts', () => {
    goGetDonuts();
});

myEmitter.on('no-donuts', () => {
    noDonuts();
});