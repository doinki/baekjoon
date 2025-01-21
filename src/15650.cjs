/**
 * @see [N과 M (2)](https://www.acmicpc.net/problem/15650)
 *
 * @param {string} input
 */
function solution(input) {
  const [n, m] = input.trim().split(' ').map(Number);

  let answer = '';
  const result = [];
  const visited = [];

  function search(deps, start = 1) {
    if (deps === m) {
      answer += result.join(' ') + '\n';
      return;
    }

    for (let i = start; i <= n; ++i) {
      if (visited[i]) continue;

      visited[i] = true;
      result.push(i);
      search(deps + 1, i + 1);
      visited[i] = false;
      result.pop();
    }
  }

  search(0);

  return answer;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
