// synchronous way of reading and writing files
const { readFileSync, writeFileSync } = require('fs');

console.log('starting the task');
// this reads the files that are stored at these path locations
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

// this creates new file at given path
const path = writeFileSync(
  './content/result-file.txt',
  `Her is the result: ${first} and ${second}`
);

console.log('done with the task');
console.log('starting the next one');
