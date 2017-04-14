## Build images

```
cd router
docker build -t zmq-rd:latest .
```

```
cd server
docker build -t zmq-rd-rep:latest .
```

```
cd client
docker build -t zmq-rd-req:latest .
```

## Run containers

Router

```
docker run -i --rm -p 5559:5559 -p 5560:5560 --name rd-instance zmq-rd 
```

Client

```
docker run -i --rm --name rd-req-instance -e ZMQ_CONNECT_ADDRESS="tcp://192.168.99.100:5559" zmq-rd-req 
```

Server

```
docker run -i --rm --name rd-rep-instance -e ZMQ_CONNECT_ADDRESS="tcp://192.168.99.100:5560" zmq-rd-rep 
```