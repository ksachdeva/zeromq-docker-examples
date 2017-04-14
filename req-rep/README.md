## Build images

```
cd server
docker build -t zmq-rep:latest .
```

```
cd client
docker build -t zmq-req:latest .
```

## Run containers

```
docker run -i --rm -p 3000:3000 --name rep-instance -e ZMQ_BIND_ADDRESS="tcp://*:3000" zmq-rep 
```

```
docker run -i --rm --name req-instance -e ZMQ_CONNECT_ADDRESS="tcp://192.168.99.100:3000" zmq-req 
```
