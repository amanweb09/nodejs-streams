// a mixture of read and write stream
// if we want to process data before passing
const fs = require('fs');
const { Transform } = require('streams');

/* 

****** tranditional ******
const sampleFileStream = fs.createReadStream('sample.txt');
const outputWritableStream = fs.createWriteStream('output.txt');

sampleFileStream.on('data', (chunk) => {
  const uppercaseString = chunk.toString().toUpperCase();

  const finalString = uppercaseString.replaceAll(/ipsum/gi, '*****'); //gi -> case insensitive
  outputWritableStream.write(finalString);
});
 */

/* 


***** using transform streams ****
  

*/
