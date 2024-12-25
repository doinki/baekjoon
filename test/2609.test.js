import { expect, test } from 'vitest';

import solution from '../src/2609.cjs';

const cases = [['24 18', '6\n72']];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
