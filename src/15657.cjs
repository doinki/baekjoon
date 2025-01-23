/**
 * @see [N과 M (8)](https://www.acmicpc.net/problem/15657)
 *
 * @param {string} input
 */
function solution(input) {
  const [[n, m], a] = input
    .trim()
    .split('\n')
    .map((s) => s.split(' ').map(Number));
  a.sort((a, b) => a - b);

  let result = '';
  const temp = [];

  function dfs(d) {
    if (d === m) {
      result += temp.join(' ') + '\n';
      return;
    }

    for (let i = 0; i < n; ++i) {
      if (a[i] < temp.at(-1)) {
        continue;
      }

      temp.push(a[i]);
      dfs(d + 1);
      temp.pop();
    }
  }

  dfs(0);

  return result.trim();
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
