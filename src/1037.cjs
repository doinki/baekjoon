/**
 * @see [약수](https://www.acmicpc.net/problem/1037)
 *
 * @param {string} input
 */
function solution(input) {
  const numbers = input.trim().split('\n')[1].split(' ').map(Number);
  let max = 1;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i += 1) {
    const n = numbers[i];

    if (n > max) {
      max = n;
    }
    if (n < min) {
      min = n;
    }
  }

  return max * min;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
