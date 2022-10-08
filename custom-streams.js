const http = require('http');

const { Readable, Writable } = require('stream');

const readableStream = new Readable({
  read() {}, //compulsorily pass this option.. no need to code anything here
  highWaterMark: 20000, //threshhold (in bytes) for buffer ki isse zyada data buffer main push na ho.. default: 64kb
});

const writableStream = new Writable({
  write(a) {
    //jo b data ayega yaha mil jaega
    console.log('writing data...', a.toString());
  }, //similar to read property in readable
});

readableStream.on('data', (chunk) => {
  console.log('reading data...', chunk.toString());
  writableStream.write(chunk);
});

//pushing data manually and not from a file
readableStream.push('hello from streams');
