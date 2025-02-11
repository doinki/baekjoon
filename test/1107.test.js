import { expect, test } from 'vitest';

import solution from '../src/1107.cjs';

const cases = [
  ['5457\n3\n6 7 8', '6'],
  ['100\n5\n0 1 2 3 4', '0'],
  ['500000\n8\n0 2 3 4 6 7 8 9', '11117'],
  ['100\n3\n1 0 5', '0'],
  ['14124\n0', '5'],
  ['1\n9\n1 2 3 4 5 6 7 8 9', '2'],
  ['80000\n2\n8 9', '2228'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
