/**
 * @see [퇴사](https://www.acmicpc.net/problem/14501)
 *
 * @param {string} input
 */
function solution(input) {
  const [[n], ...a] = input
    .trim()
    .split('\n')
    .map((s) => s.split(' ').map(Number));

  let result = 0;

  function dfs(index = 0, s = 0) {
    result = Math.max(result, s);

    for (let i = index; i < n; ++i) {
      if (i + a[i][0] > n) {
        continue;
      }

      dfs(i + a[i][0], s + a[i][1]);
    }
  }

  dfs();

  return String(result);
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
