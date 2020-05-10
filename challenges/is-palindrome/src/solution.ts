/*
* #===============================================================#
* | Write a function that checks to see if a word is a palindrome | 
* #===============================================================#
*/

const reverse = (word: string) => word.split('').reverse().join();

function _isPalindrome(word: string): boolean {
  const trimmed = word.trim();
  return trimmed === reverse(trimmed);
}
 