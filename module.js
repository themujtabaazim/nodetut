// Nodejs uses CommonJS
// Every file is a module
// Modules are encapsulated code

const names = require("./names");
const sayHi = require("./utils");
const alternativeflavor = require("./alternativeflavor");
require("./mindgrenade");

console.log(names);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

console.log(sayHi);

console.log(alternativeflavor);
