/*
* #=============================================#
* | Write a function that reverses any sentence | 
* #=============================================#
*/

function _reverseSentence(sentence: string): string {
  const words = sentence.trim().split(/\s+/g);
  return words.reverse().join(' ');
}
 