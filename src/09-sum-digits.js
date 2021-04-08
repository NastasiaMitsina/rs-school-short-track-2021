/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arrNum = String(n)
    .split('')
    .map((e) => +e);
  let result;
  result = arrNum.reduce((prev, val) => prev + val);
  result = String(result).split('');
  if (result.length > 1) {
    result = result.reduce((prev, val) => +prev + +val);
  } else {
    result = Number(result.join(''));
  }
  return result;
}

module.exports = getSumOfDigits;
