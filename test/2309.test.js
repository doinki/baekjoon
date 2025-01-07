import { expect, test } from 'vitest';

import solution from '../src/2309.cjs';

const cases = [
  ['20\n7\n23\n19\n10\n15\n25\n8\n13', '7\n8\n10\n13\n19\n20\n23'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
