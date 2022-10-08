const http = require('http');

const { Readable } = require('stream');

const server = http.createServer((req, res) => {
  if (req.url !== '/') {
    return res.end();
  }

  const readableStream = new Readable({
    read() {}, //compulsorily pass this option.. no need to code anything here
  });

  readableStream.on('data', (chunk) => {
    console.log('data coming', chunk);
  });

  //pushing data manually and not from a file
  readableStream.push('hello from streams');
});

server.listen(5700, () => console.log('listening'));
