// Common JS every file is module (by default)
//Modules - Encapsulated code (only share minimum)

// To import we must "require"
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

const { john, peter } = names;
// console.log(data);
// sayHi('Martin');
// sayHi(john);
// sayHi(peter);
