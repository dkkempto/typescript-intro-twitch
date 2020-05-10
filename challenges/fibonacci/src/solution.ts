/*
* #===========================================================================#
* | Write a function that lists the numbers in the fibonacci sequence up to X | 
* #===========================================================================#
*/

function _fibonacci(x: number) {
  _fibonacciRecursive(0, 1, x);
}

function _fibonacciRecursive(previousNumber: number, currentNumber: number, maxNumber: number) {
  console.log(currentNumber);

  const nextNumber = previousNumber + currentNumber;
  
  if(nextNumber > maxNumber) return;

  _fibonacciRecursive(currentNumber, nextNumber, maxNumber);
}