const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //req and res are also streams
  // req = readable stream
  // res = writable stream

  if (req.url !== '/') {
    return res.end();
  }

  // const file = fs.readFileSync('sample.txt');
  // return res.end(file);

  // const readableStream = fs.createReadStream('sample.txt');

  //pipe connects read and write stream
  // readableStream.pipe(
  //   res /* pass a writable stream to pipe with the readable stream */
  // );

  // sending a big video file using streams
  const readableStream = fs.createReadStream('sample.mp4');
  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  readableStream.pipe(res);
});

server.listen(5700, () => console.log('listening'));
