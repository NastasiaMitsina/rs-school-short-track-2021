/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const numbers = [];
  const columns = matrix[0].length;

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== 0) {
        numbers.push(matrix[j][i]);
      } else {
        break;
      }
    }
  }

  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((prev, sum) => prev + sum);
}

module.exports = getMatrixElementsSum;
