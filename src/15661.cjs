/**
 * @see [링크와 스타트](https://www.acmicpc.net/problem/15661)
 * @param {string} input
 */
function solution(input) {
  const [[N], ...a] = input
    .trim()
    .split('\n')
    .map((s) => s.split(' ').map(Number));

  let result = Number.MAX_SAFE_INTEGER;

  const s = [];
  const l = [];

  function dfs(d, index = 0) {
    if (d === N) {
      if (s.length === 0 || l.length === 0) {
        return;
      }

      let r1 = 0;
      let r2 = 0;

      for (let i = 0; i < s.length; ++i) {
        for (let j = 0; j < s.length; ++j) {
          r1 += a[s[i]][s[j]];
        }
      }

      for (let i = 0; i < l.length; ++i) {
        for (let j = 0; j < l.length; ++j) {
          r2 += a[l[i]][l[j]];
        }
      }

      result = Math.min(result, Math.abs(r1 - r2));

      return;
    }

    s.push(d);
    dfs(d + 1);
    s.pop();

    l.push(d);
    dfs(d + 1);
    l.pop();
  }

  dfs(0);

  return result.toString();
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
