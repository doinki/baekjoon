import { expect, test } from 'vitest';

import solution from '../src/4375.cjs';

const cases = [['3\n7\n9901', '3\n6\n12']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
