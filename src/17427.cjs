/**
 * @see [약수의 합 2](https://www.acmicpc.net/problem/17427)
 *
 * @param {string} input
 */
function solution(input) {
  const n = Number(input);
  let answer = 0;

  for (let i = 1; i <= n; ++i) {
    answer += Math.floor(n / i) * i;
  }

  return answer;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
