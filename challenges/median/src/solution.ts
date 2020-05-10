/*
* #===================================================================#
* | Write a function that finds the median of a list/array of numbers | 
* #===================================================================#
*/

function _median(list: number[]) : number {
  const sorted = list.sort((a,b) => a - b);

  const midpoint = sorted.length / 2;

  if(sorted.length % 2 === 0) {
    return (sorted[Math.floor(midpoint)] + sorted[Math.ceil(midpoint)]) / 2;
  } else {
    return sorted[midpoint];
  }
}
 