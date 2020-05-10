/*
* #==========================================================================#
* | Write a function that creates a list/array of digits from a large number | 
* #==========================================================================#
*/

function _numToDigits(num: number): number[] {
  return num.toString().split('').map(c => Number.parseInt(c));
}
 