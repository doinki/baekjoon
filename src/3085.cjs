/**
 * @see [사탕 게임](https://www.acmicpc.net/problem/3085)
 *
 * @param {string} input
 */
function solution(input) {
  const [, ...arr] = input
    .trim()
    .split('\n')
    .map((v) => v.split(''));
  const n = arr.length;

  let result = 1;

  for (let i = 0; i < n; ++i) {
    result = Math.max(result, checkRow(arr, i), checkColumn(arr, i));

    if (result == n) {
      return result;
    }
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      const a = arr[i][j];

      if (j < n - 1) {
        const b = arr[i][j + 1];

        if (a !== b) {
          arr[i][j] = b;
          arr[i][j + 1] = a;

          result = Math.max(
            result,
            checkRow(arr, i),
            checkColumn(arr, j),
            checkColumn(arr, j + 1),
          );

          if (result == n) {
            return result;
          }

          arr[i][j + 1] = b;
          arr[i][j] = a;
        }
      }

      if (i < n - 1) {
        const b = arr[i + 1][j];

        if (a !== b) {
          arr[i][j] = b;
          arr[i + 1][j] = a;

          result = Math.max(
            result,
            checkColumn(arr, j),
            checkRow(arr, i),
            checkRow(arr, i + 1),
          );

          if (result == n) {
            return result;
          }

          arr[i + 1][j] = b;
          arr[i][j] = a;
        }
      }
    }
  }

  return result;
}

/**
 *
 * @param {string[][]} arr
 * @param {number} index
 */
function checkRow(arr, index) {
  let max = 1;
  let count = 1;

  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[index][i] === arr[index][i + 1]) {
      count++;
    } else {
      count = 1;
    }

    max = Math.max(max, count);
  }

  return max;
}

/**
 *
 * @param {string[][]} arr
 * @param {number} index
 */
function checkColumn(arr, index) {
  let max = 1;
  let count = 1;

  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i][index] === arr[i + 1][index]) {
      count++;
    } else {
      count = 1;
    }

    max = Math.max(max, count);
  }

  return max;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
