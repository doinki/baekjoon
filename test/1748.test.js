import { expect, test } from 'vitest';

import solution from '../src/1748.cjs';

const cases = [
  ['5', '5'],
  ['15', '21'],
  ['120', '252'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
