/*
* #=================================================================#
* | Write a function that alphabetizes the characters of any string | 
* #=================================================================#
*/

const compareTwoCharacters = (a: string, b: string) : number => {
  const aCharCode = a.toLowerCase().charCodeAt(0);
  const bCharCode = b.toLowerCase().charCodeAt(0);
  return aCharCode - bCharCode;
}

function _alphabetize(str: string): string  {
  return str.split('').sort(compareTwoCharacters).join();
}