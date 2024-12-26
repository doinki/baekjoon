/**
 * @see [소수 구하기](https://www.acmicpc.net/problem/1929)
 *
 * @param {string} input
 */
function solution(input) {
  const [M, N] = input.trim().split(' ').map(Number);
  let result = '';

  const arr = new Array(N + 1);
  arr[0] = true;
  arr[1] = true;

  for (let i = 4; i <= N; i += 2) {
    arr[i] = true;
  }

  for (let i = 3, length = Math.sqrt(N); i <= length; i += 2) {
    if (arr[i]) {
      continue;
    }

    for (let j = i * 3; j <= N; j += i * 2) {
      arr[j] = true;
    }
  }

  for (let i = M; i <= N; i += 1) {
    if (!arr[i]) {
      result += i + '\n';
    }
  }

  return result;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
