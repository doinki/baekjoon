import { expect, test } from 'vitest';

import solution from '../src/6064.cjs';

const cases = [['3\n10 12 3 9\n10 12 7 2\n13 11 5 6', '33\n-1\n83']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
