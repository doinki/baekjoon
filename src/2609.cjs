/**
 * @see [최대공약수와 최소공배수](https://www.acmicpc.net/problem/2609)
 *
 * @param {string} input
 */
function solution(input) {
  const [a, b] = input.trim().split(' ').map(Number);

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  const g = gcd(a, b);

  return [g, (a * b) / g].join('\n');
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
