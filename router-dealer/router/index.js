const zmq = require('zeromq');

const frontend = zmq.socket('router');
const backend = zmq.socket('dealer');

const ROUTER_BIND_ADDRESS = process.env.ZMQ_ROUTER_BIND_ADDRESS || 'tcp://*:5559';
const DEALER_BIND_ADDRESS = process.env.ZMQ_DEALER_BIND_ADDRESS || 'tcp://*:5560';

frontend.on('message', function () {
    var args = Array.apply(null, arguments);
    backend.send(args);
});

backend.on('message', function () {
    var args = Array.apply(null, arguments);
    frontend.send(args);
});

console.log('connecting frontend (router) at ..', ROUTER_BIND_ADDRESS);
frontend.bindSync(ROUTER_BIND_ADDRESS);

console.log('connecting backend (dealer) at ..', DEALER_BIND_ADDRESS);
backend.bindSync(DEALER_BIND_ADDRESS);

process.on('SIGINT', function () {
    frontend.close();
    backend.close();
});
