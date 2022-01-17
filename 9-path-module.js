const path = require('path');

// to find the path separator
console.log(path.sep);

// to join a path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// to find the base name (the end file)
const base = path.basename(filePath);
console.log(base);

// path resolve return and absolute path (___dirname will point to this directory name where app.js is located)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
