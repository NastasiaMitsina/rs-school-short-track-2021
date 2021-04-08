/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else if (count > 1) {
      result += count + arr[i];
      count = 1;
    } else {
      result += arr[i];
    }
  }
  return result;
}

module.exports = encodeLine;
