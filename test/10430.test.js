import { expect, test } from 'vitest';

import solution from '../src/10430.cjs';

const cases = [['5 8 4', '1\n1\n0\n0']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
