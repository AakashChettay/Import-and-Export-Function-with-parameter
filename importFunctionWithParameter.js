let squareTheNumber = require('./exportFunctionWithParameter.js')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Enter a Number: ', num => {
  console.log(squareTheNumber(num))
  rl.close()
})
