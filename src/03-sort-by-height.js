/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrCopy = arr;
  const result = [];
  let numbers = [];

  arrCopy.forEach((e) => {
    if (e !== -1) numbers.push(e);
  });

  numbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === -1) {
      result.push(-1);
    } else {
      result.push(numbers[0]);
      numbers.splice(0, 1);
    }
  }
  return result;
}

module.exports = sortByHeight;
