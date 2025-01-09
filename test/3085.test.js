import { expect, test } from 'vitest';

import solution from '../src/3085.cjs';

const cases = [
  ['3\nCCP\nCCP\nPPC', '3'],
  ['4\nPPPP\nCYZY\nCCPY\nPPCC', '4'],
  ['5\nYCPZY\nCYZZP\nCCPPP\nYCYZC\nCPPZZ', '4'],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
