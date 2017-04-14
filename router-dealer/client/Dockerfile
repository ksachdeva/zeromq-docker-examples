FROM lgatica/node-zmq:6
COPY . /client
WORKDIR /client
RUN rm -rf node_modules && \     
    npm install
CMD ["node", "index.js"]