/**
 * @see [수 이어 쓰기 1](https://www.acmicpc.net/problem/1748)
 *
 * @param {string} input
 */
function solution(input) {
  let result = +input;

  if (result < 10) {
    return result;
  } else if (result < 100) {
    return 2 * result - 9;
  } else if (result < 1000) {
    return 3 * result - 108;
  } else if (result < 10000) {
    return 4 * result - 1107;
  } else if (result < 100000) {
    return 5 * result - 11106;
  } else if (result < 1000000) {
    return 6 * result - 111105;
  } else if (result < 10000000) {
    return 7 * result - 1111104;
  } else if (result < 100000000) {
    return 8 * result - 11111103;
  } else if (result < 1000000000) {
    return 9 * result - 111111102;
  } else {
    return 10 * result - 1111111101;
  }
}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
