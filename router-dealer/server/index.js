const zmq = require('zeromq');
const responder = zmq.socket('rep');

const CONNECT_ADDRESS = process.env.ZMQ_CONNECT_ADDRESS || 'tcp://localhost:5560';

responder.on('message', function (msg) {
    console.log('Received from client: %s', msg.toString());
    responder.send(`REP-${msg.toString()}`);
});

responder.connect(CONNECT_ADDRESS);
console.log(`Responder connected at ${CONNECT_ADDRESS} ..`);

process.on('SIGINT', function () {
    responder.close();
});