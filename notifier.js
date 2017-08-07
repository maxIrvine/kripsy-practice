// You should probably npm install ws!
// Import ws
// Create a new WebSocketServer
const PORT = 8080;
const ws = require('ws');
const server = new ws.Server({port:8080});

let wsServer;

function broadcast (message) {
  // Use a WebSocket connection to
  // tell all clients a message
    socket.on('connection', (socket) => {
        socket.on('message', (msg) => {
            server.clients.forEach( (client) => {
                client.send(message);
            });
        });
    });
}

function init(callback) {
  wsServer =  new WebSocketServer({ port: PORT });

  // Whatever callback gets passed in
  // It has access to the socket
  wsServer.on('connection', (socket) => {
    callback(socket);
  })
}

module.exports = {
  broadcast: broadcast,
  init: init
};