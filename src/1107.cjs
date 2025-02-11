/**
 * 골드 V
 * 리모컨 - https://www.acmicpc.net/problem/1107
 */

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

/**
 * @param {string} input
 */
function solution(input) {
  const [[N], [C], A] = input
    .trim()
    .split('\n')
    .map((str) => str.split(' ').map(Number));
  const n = N.toString();

  if (N === 100) {
    return 0;
  }

  if (C === 0) {
    return Math.min(Math.abs(100 - N), N.toString().length);
  }

  if (C === 10) {
    return Math.abs(100 - N);
  }

  const numbers = Array.from({ length: 10 }, (_, index) =>
    A.includes(index) ? Number.NaN : index,
  );
  const filteredNumbers = numbers.filter((n) => !Number.isNaN(n));
  const max = Math.max(...filteredNumbers);
  const min = Math.min(...filteredNumbers);
  const min2 = Math.min(...filteredNumbers.filter((n) => !!n));
  let result = 0;
  let a = '';
  let b = '';
  let c = Number(''.padEnd(n.length - 1 || 1, max)).toString();
  let d = Number(min2.toString().padEnd(n.length + 1, min)).toString();

  for (let i = 0; i < n.length; ++i) {
    if (Number.isNaN(numbers[n[i]])) {
      for (let j = 1; j < 10; ++j) {
        if (!b && Number.isInteger(numbers[+n[i] + j])) {
          b = Number(
            (n.substring(0, i) + numbers[+n[i] + j]).padEnd(n.length, min),
          ).toString();
        }

        if (!a && Number.isInteger(numbers[+n[i] - j])) {
          a = Number(
            (n.substring(0, i) + numbers[+n[i] - j]).padEnd(n.length, max),
          ).toString();
        }
      }

      if (!b && i) {
        for (let j = +n[i - 1] + 1; j < 10; ++j) {
          if (Number.isInteger(numbers[j])) {
            b = (n.substring(0, i - 1) + j).padEnd(n.length, min);
            break;
          }
        }
      }

      if (!a && i) {
        for (let j = +n[i - 1] - 1; j >= 0; --j) {
          if (Number.isInteger(numbers[j])) {
            a = (n.substring(0, i - 1) + j).padEnd(n.length, max);
            break;
          }
        }
      }

      break;
    }
    result++;
  }

  const results = [];

  if (a !== '') {
    results.push(a.length + Math.abs(N - a));
  }
  if (b !== '') {
    results.push(b.length + Math.abs(N - b));
  }
  if (result === n.length) {
    results.push(result);
  }

  return Math.min(
    ...results,
    Math.abs(100 - N),
    Math.abs(N - c) + c.length,
    Math.abs(N - d) + d.length,
  );
}

module.exports = solution;
