import { expect, test } from 'vitest';

import solution from '../src/9095.cjs';

const cases = [['3\n4\n7\n10', '7\n44\n274']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
