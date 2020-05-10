/*
* #==========================================================================================================================================================#
* | Write a function that for number 1-100, returns "Fizz" if the number is divisible by 5, "Buzz" if divisible by 3, and "FizzBuzz" if divisible by 5 and 3 | 
* #==========================================================================================================================================================#
*/

function _fizzBuzz(num: number) : string {
  const divByFive = num % 5 === 0;
  const divByThree = num % 3 === 0;

  if(divByFive && divByThree) return "FizzBuzz";
  if(divByFive) return "Fizz";
  if(divByThree) return "Buzz";
}
 