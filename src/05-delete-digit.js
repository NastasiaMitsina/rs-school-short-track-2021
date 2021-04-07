/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNum = String(n).split('');
  const min = Math.min(...arrNum);
  arrNum.splice(arrNum.indexOf(String(min)), 1);
  arrNum = arrNum.join('');
  return Number(arrNum);
}

module.exports = deleteDigit;
