/**
 * @see [나머지](https://www.acmicpc.net/problem/10430)
 *
 * @param {string} input
 */
function solution(input) {
  const [A, B, C] = input.split(' ').map(Number);

  return [
    (A + B) % C,
    ((A % C) + (B % C)) % C,
    (A * B) % C,
    ((A % C) * (B % C)) % C,
  ].join('\n');
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
