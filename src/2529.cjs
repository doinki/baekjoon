/**
 * @see [부등호](https://www.acmicpc.net/problem/2529)
 * @param {string} input
 */
function solution(input) {
  const [[N], a] = input
    .trim()
    .split('\n')
    .map((s) => s.split(' '));

  const temp = [];
  const v = [];
  let r1 = '';
  let r2 = '';

  function max(d = 0) {
    if (r2) {
      return;
    }

    if (d === Number(N) + 1) {
      r2 = temp.join('');
    }

    for (let i = 9; i >= 0; --i) {
      if (v[i]) {
        continue;
      }

      temp.push(i);
      v[i] = true;
      if (d === 0 || eval(temp.at(-2) + a[d - 1] + i)) {
        max(d + 1, i);
      }
      temp.pop();
      v[i] = false;
    }
  }

  function min(d = 0) {
    if (r1) {
      return;
    }

    if (d === Number(N) + 1) {
      r1 = temp.join('');
    }

    for (let i = 0; i <= 9; ++i) {
      if (v[i]) {
        continue;
      }

      temp.push(i);
      v[i] = true;
      if (d === 0 || eval(temp.at(-2) + a[d - 1] + i)) {
        min(d + 1, i);
      }
      temp.pop();
      v[i] = false;
    }
  }

  max();
  min();

  return r2 + '\n' + r1;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
