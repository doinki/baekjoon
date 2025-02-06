/**
 * @see [암호 만들기](https://www.acmicpc.net/problem/1759)
 *
 * @param {string} input
 */
function solution(input) {
  const [[L, C], a] = input
    .trim()
    .split('\n')
    .map((s) => s.split(' '));
  a.sort();

  let result = '';
  const obj = { a: true, e: true, i: true, o: true, u: true };

  function dfs(d, index = 0, s = '') {
    if (d == L) {
      let a = 0;
      let b = 0;

      for (let i = 0; i < L; ++i) {
        if (obj[s[i]]) {
          a += 1;
        } else {
          b += 1;
        }
      }

      if (a >= 1 && b >= 2) {
        result += s.trim() + '\n';
      }

      return;
    }

    for (let i = index; i < C; ++i) {
      dfs(d + 1, i + 1, s + a[i]);
    }
  }

  dfs(0);

  return result.trim();
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
