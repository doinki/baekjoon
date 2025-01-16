/**
 * 실버 I
 * 카잉 달력 - https://www.acmicpc.net/problem/6064
 */

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

/**
 * @param {string} input
 */
function solution(input) {
  const [, ...values] = input.trim().split('\n');

  return values
    .map((value) => value.split(' ').map(Number))
    .reduce((result, [M, N, x, y]) => {
      for (let i = x, length = lcm(M, N) + i; i < length; i += M) {
        if ((i - y) % N === 0) {
          return result + i + '\n';
        }
      }

      return result + -1 + '\n';
    }, '')
    .trim();
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = solution;
