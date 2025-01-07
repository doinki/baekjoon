/**
 * @see [일곱 난쟁이](https://www.acmicpc.net/problem/2309)
 *
 * @param {string} input
 */
function solution(input) {
  const numbers = input.trim().split('\n').map(Number);
  let result = [];

  function dfs(index, sum, selected) {
    if (selected.length === 7) {
      if (sum === 100) {
        result = selected;
      }
      return;
    }

    for (let i = index; i < numbers.length; i += 1) {
      dfs(i + 1, sum + numbers[i], [...selected, numbers[i]]);
    }
  }

  dfs(0, 0, []);

  return result.sort((a, b) => a - b).join('\n');
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
