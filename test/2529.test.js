import { expect, test } from 'vitest';

import solution from '../src/2529.cjs';

const cases = [
  ['2\n< >', '897\n021'],
  ['9\n> < < < > > > < <', '9567843012\n1023765489'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
