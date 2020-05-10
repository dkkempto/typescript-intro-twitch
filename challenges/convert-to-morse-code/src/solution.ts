/*
* #=============================================================#
* | Write a function that translates any string into morse code | 
* #=============================================================#
*/

interface Mapping {
  character: string,
  morse: string,
}

const morseCodeMapping: Mapping[] = [
  { character: 'a', morse: '.-' },
  { character: 'b', morse: '-...' },
  { character: 'c', morse: '-.-.' },
  { character: 'd', morse: '-..' },
  { character: 'e', morse: '.' },
  { character: 'f', morse: '..--.' },
  { character: 'g', morse: '--.' },
  { character: 'h', morse: '....' },
  { character: 'i', morse: '..' },
  { character: 'j', morse: '.---' },
  { character: 'k', morse: '-.-' },
  { character: 'l', morse: '.-..' },
  { character: 'm', morse: '--' },
  { character: 'n', morse: '-.' },
  { character: 'o', morse: '--' },
  { character: 'p', morse: '.--.' },
  { character: 'q', morse: '--.-' },
  { character: 'r', morse: '.-.' },
  { character: 's', morse: '...' },
  { character: 't', morse: '-' },
  { character: 'u', morse: '..-' },
  { character: 'v', morse: '...-' },
  { character: 'w', morse: '.--' },
  { character: 'x', morse: '-..-' },
  { character: 'y', morse: '-.--' },
  { character: 'z', morse: '--..' },
  { character: '1', morse: '.----' },
  { character: '2', morse: '..---' },
  { character: '3', morse: '...--' },
  { character: '4', morse: '....-' },
  { character: '5', morse: '.....' },
  { character: '6', morse: '-....' },
  { character: '7', morse: '--...' },
  { character: '8', morse: '---..' },
  { character: '9', morse: '----.' },
  { character: '0', morse: '-----' },
];

function _convertToMorseCode(input: string) : string {
  const lowerCased = input.toLowerCase();
  const cleaned = lowerCased.replace(/[^a-z0-9]/g, '');
  const morsified = cleaned.split('').map(c => morseCodeMapping.find(m => m.character === c).morse).join();
  return morsified;
}
 