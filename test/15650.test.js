import { expect, test } from 'vitest';

import solution from '../src/15650.cjs';

const cases = [
  ['3 1', '1\n2\n3'],
  ['4 2', '1 2\n1 3\n1 4\n2 3\n2 4\n3 4'],
  ['4 4', '1 2 3 4'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
