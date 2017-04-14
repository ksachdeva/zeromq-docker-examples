const zmq = require('zeromq');
const requester = zmq.socket('req');

const CONNECT_ADDRESS = process.env.ZMQ_CONNECT_ADDRESS || 'tcp://localhost:3000';

requester.connect(CONNECT_ADDRESS);

console.log(`Requester connected at ${CONNECT_ADDRESS} ..`);

requester.on('message', function (msg) {
    console.log('Received from responder: %s', msg.toString());
});

// sends a request every 1 second
setInterval(() => {
    requester.send('Hello');
}, 1000);

process.on('SIGINT', function () {
    requester.close();
});