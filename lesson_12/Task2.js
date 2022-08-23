const array = [12, 4, 2, 6];

const checkArray = (arr) => {
  arr.push(Math.floor(Math.random() * 11));
  const totalSum = arr.reduce((accum, cur) => accum + cur, 0);
  if (totalSum < 50) {
    checkArray(arr);
  }
  return arr;
};

console.log(checkArray(array));
