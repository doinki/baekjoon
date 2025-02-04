/**
 * @see [스타트와 링크](https://www.acmicpc.net/problem/14889)
 *
 * @param {string} input
 */
function solution(input) {
  const [a, ...b] = input.trim().split('\n');

  const n = +a;
  const half = n / 2;
  const point = b.map((str) => str.split(' ').map((v) => +v));
  const checker = new Array(n).fill(false);
  let min = Number.MAX_SAFE_INTEGER;

  function dfs(deps, startIndex = 0) {
    if (deps === half) {
      let startSum = 0;
      let linkSum = 0;
      const start = [];
      const link = [];

      checker.forEach((value, index) =>
        value ? start.push(index) : link.push(index),
      );

      for (let i = 0; i < half; ++i) {
        for (let j = i + 1; j < half; ++j) {
          startSum =
            startSum + point[start[i]][start[j]] + point[start[j]][start[i]];
          linkSum = linkSum + point[link[i]][link[j]] + point[link[j]][link[i]];
        }
      }

      min = Math.min(min, Math.abs(startSum - linkSum));

      return;
    }

    for (let i = startIndex; i < n; ++i) {
      checker[i] = true;
      dfs(deps + 1, i + 1);
      checker[i] = false;
    }
  }

  dfs(0, 0);

  return min;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
