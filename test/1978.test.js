import { expect, test } from 'vitest';

import solution from '../src/1978.cjs';

const cases = [['4\n1 3 5 7', '3']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
