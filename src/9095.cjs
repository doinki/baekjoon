/**
 * 실버 III
 * 1, 2, 3 더하기 - https://www.acmicpc.net/problem/9095
 */

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

/**
 * @param {string} input
 */
function solution(input) {
  const [, ...numbers] = input.trim().split('\n').map(Number);
  let result = '';

  return numbers
    .reduce((result, n) => {
      const ref = { current: 0 };

      dfs(n, 0, ref);

      return result + ref.current + '\n';
    }, '')
    .trim();
}

function dfs(n, sum, ref) {
  if (sum > n) {
    return;
  }
  if (sum === n) {
    ref.current++;
  }

  dfs(n, sum + 1, ref);
  dfs(n, sum + 2, ref);
  dfs(n, sum + 3, ref);
}

module.exports = solution;
