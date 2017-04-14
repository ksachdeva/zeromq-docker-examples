FROM lgatica/node-zmq:6
COPY . /router
WORKDIR /router
RUN rm -rf node_modules && \ 
    npm install
EXPOSE 5559
EXPOSE 5560
CMD ["node", "index.js"]