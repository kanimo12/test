/*Use Array.reduce() method to reverse the following given array

const arr = [1, 2, 3, 4, 5]*/

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, current) => {
  return [current, ...acc];
}, []);

console.log(reversedArr);