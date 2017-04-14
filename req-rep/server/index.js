const zmq = require('zeromq');
const responder = zmq.socket('rep');

const BIND_ADDRESS = process.env.ZMQ_BIND_ADDRESS || 'tcp://*:3000';

responder.on('message', function (msg) {
    console.log('Received from client: %s', msg.toString());
    responder.send(`REP-${msg.toString()}`);
});

responder.bind(BIND_ADDRESS, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Responder binded at ${BIND_ADDRESS} ..`);
    }
});

process.on('SIGINT', function () {
    responder.close();
});