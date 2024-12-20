import { expect, test } from 'vitest';

import solution from '../src/1037.cjs';

const cases = [
  ['2\n4 2', '8'],
  ['1\n2', '4'],
  ['6\n3 4 2 12 6 8', '24'],
  ['14\n14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596', '185192'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
