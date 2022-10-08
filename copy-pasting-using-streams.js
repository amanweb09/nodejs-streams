const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url !== '/') {
    return res.end();
  }

  /* 

  traditional way:
  const file = fs.readFileSync('sample.txt');
  fs.writeFileSync('pasted.txt', file);
  return res.end();
 */

  /* ******************************************************** */

  /* streaming way */
  const readableStream = fs.createReadStream('sample.txt'); //for reading data
  const writeableStream = fs.createWriteStream('stream-pasted.txt'); //for writing data

  readableStream.on('data', (chunk) => {
    // console.log('chunk: ', chunk.toString());
    writeableStream.write(chunk); //writing file using streams
  });

  res.end();
});

server.listen(5700, () => console.log('listening'));
