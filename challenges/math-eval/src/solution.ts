/*
* #==============================================================================================================#
* | Write a function that takes in two numbers and an operator, then returns the mathematically evaluated answer | 
* #==============================================================================================================#
*/

type Operation = '+' | '-' | '*' | '/';

function _mathEval(a: number, b: number, op: Operation) : number {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "/": return a / b;
    case "*": return a * b;
    default:
      break;
  }
}
 