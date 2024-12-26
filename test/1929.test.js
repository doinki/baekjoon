import { expect, test } from 'vitest';

import solution from '../src/1929.cjs';

const cases = [['3 16', '3\n5\n7\n11\n13']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
