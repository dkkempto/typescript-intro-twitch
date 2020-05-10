/*
* #=======================================================================================================================#
* | Write a function that takes in any number and converts each digit into a 1 or 0. 1 if it's above 5, 0 if it's below 6 | 
* #=======================================================================================================================#
*/

function _convertNum(num: number) : string {
  const str = num.toString();
  const digits = str.split('').map(d => Number.parseInt(d));
  const convertedDigits = digits.map(d => d > 5 ? 1 : 0);
  return convertedDigits.join();
}
 