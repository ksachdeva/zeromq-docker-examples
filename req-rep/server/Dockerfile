FROM lgatica/node-zmq:6
COPY . /server
WORKDIR /server
RUN rm -rf node_modules && \ 
    npm install
EXPOSE 3000
CMD ["node", "index.js"]