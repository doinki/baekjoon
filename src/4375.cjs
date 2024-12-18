/**
 * @see [1](https://www.acmicpc.net/problem/4375)
 *
 * @param {string} input
 */
function solution(input) {
  return input
    .trim()
    .split('\n')
    .map(Number)
    .map((n) => {
      let count = 1;

      let num = 1;
      while (num % n !== 0) {
        count += 1;
        num = (num * 10 + 1) % n;
      }

      return count;
    })
    .join('\n');
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
