/**
 * @see [소수 찾기](https://www.acmicpc.net/problem/1978)
 *
 * @param {string} input
 */
function solution(input) {
  const arr = new Array(1001);
  arr[0] = true;
  arr[1] = true;

  for (let i = 4; i <= 1000; i += 2) {
    arr[i] = true;
  }

  for (let i = 3; i <= 1000; i += 2) {
    if (arr[i]) {
      continue;
    }

    for (let j = i * 2; j <= 1000; j += i) {
      arr[j] = true;
    }
  }

  return input
    .trim()
    .split('\n')[1]
    .split(' ')
    .map(Number)
    .reduce((acc, n) => (arr[n] ? acc : acc + 1), 0);
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
