FROM lgatica/node-zmq:6
COPY . /server
WORKDIR /server
RUN rm -rf node_modules && \ 
    npm install
CMD ["node", "index.js"]