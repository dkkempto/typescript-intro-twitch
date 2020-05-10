/*
* #==================================================================#
* | Write a function that returns the largest number in a list/array | 
* #==================================================================#
*/

function _largestInCollection<T>(list: Array<T>): T  {
  return list.reduce((a,b) => b > a ? b : a);
}