/*1: Testing out Node in Terminal
node <filename> to execute code in the terminal
*/

const amount = 12
if ( amount <= 10) {
console.log("small number")
}
else{
console.log("large number")
}
console.log("hey it's my first node app"
)

/*2: Global Variables
Node doesn't have the Windows Object but it has Global Object that has  __dirname, __filename, require, module, process
*/

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);


/*3: Hello World in Node at an interval*/

setInterval(() => {
  console.log("Hello World");
}, 1000);

