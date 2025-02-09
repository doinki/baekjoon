import { expect, test } from 'vitest';

import solution from '../src/15661.cjs';

const cases = [
  ['4\n0 1 2 3\n4 0 5 6\n7 1 0 2\n3 4 5 0', '0'],
  [
    '6\n0 1 2 3 4 5\n1 0 2 3 4 5\n1 2 0 3 4 5\n1 2 3 0 4 5\n1 2 3 4 0 5\n1 2 3 4 5 0',
    '2',
  ],
  [
    '8\n0 5 4 5 4 5 4 5\n4 0 5 1 2 3 4 5\n9 8 0 1 2 3 1 2\n9 9 9 0 9 9 9 9\n1 1 1 1 0 1 1 1\n8 7 6 5 4 0 3 2\n9 1 9 1 9 1 0 9\n6 5 4 3 2 1 9 0',
    '1',
  ],
  ['5\n0 3 1 1 1\n3 0 1 1 1\n1 1 0 1 1\n1 1 1 0 1\n1 1 1 1 0', '0'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
