/**
 * @see [N과 M (1)](https://www.acmicpc.net/problem/15649)
 *
 * @param {string} input
 */
function solution(input) {
  const [n, m] = input.trim().split(' ').map(Number);
  let answer = '';
  const result = [];
  const visited = [];

  function search(deps) {
    if (deps === m) {
      answer += result.join(' ') + '\n';
      return;
    }

    for (let i = 1; i <= n; i += 1) {
      if (visited[i]) continue;

      visited[i] = true;
      result.push(i);
      search(deps + 1);
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
