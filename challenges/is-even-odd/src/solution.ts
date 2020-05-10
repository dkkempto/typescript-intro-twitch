/*
* #===============================================================#
* | Write a function that returns whether a number is even or odd | 
* #===============================================================#
*/

type EvenOdd = "even" | "odd";

function _isEvenOdd(num: number) : EvenOdd {
  if(num % 2 === 0) return "even";
  return "odd";
}
 