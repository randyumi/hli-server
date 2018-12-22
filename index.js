const ws = require('ws')

const server = new ws.Server({
  host: '0.0.0.0',
  port: '8080'
});

server.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
});

