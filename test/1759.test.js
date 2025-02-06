import { expect, test } from 'vitest';

import solution from '../src/1759.cjs';

const cases = [
  [
    '4 6\na t c i s w',
    'acis\nacit\naciw\nacst\nacsw\nactw\naist\naisw\naitw\nastw\ncist\ncisw\ncitw\nistw',
  ],
];

test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
