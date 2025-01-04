import { expect, test } from 'vitest';

import solution from '../src/17427.cjs';

const cases = [
  ['1', '1'],
  ['2', '4'],
  ['10', '87'],
  ['70', '4065'],
  ['10000', '82256014'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
