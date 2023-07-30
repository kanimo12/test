/*Check the below given code, if there are any issues, fix them and explain the output

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {

  if (num % 2 === 0) {

    acc.evens.push(num);

  } else {

    acc.odds.push(num);

  }

  return acc;

});
console.log(result);*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
}, { evens: [], odds: [] });

console.log(result);
/*explaination of this code
 The second input to the reduce() function is a starting value for the accumulator. An object containing the properties evens (an empty array) and odds (an empty array) makes up the initial value.

The code determines if a number is even or odd for each element (num) in the array of integers.

It pushes the number to the evens array in the accumulator (acc.evens.push(num)) if the number is even (num% 2 === 0).

When an integer is odd, the function pushes it into the accumulator's odds array (acc.odds.push(num)).

After each repetition, the updated accumulator (acc) is given back.

The final value of the accumulator, which contains the evens and odds arrays with the final values, is returned by the reduce() function when it has finished iterating through the numbers array.*/