import { existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import chalk from 'chalk';
import { parseDocument, DomUtils } from 'htmlparser2';
import { format as prettier } from 'prettier';
import * as R from 'remeda';

const problemNumber = Number(process.argv[2]);

if (Number.isNaN(problemNumber)) {
  console.error(`${chalk.redBright('Problem number is required.')}\n`);
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const problemPath = join(__dirname, '..', 'src', `${problemNumber}.cjs`);
const problemExists = existsSync(problemPath);
const testPath = join(__dirname, '..', 'test', `${problemNumber}.test.js`);
const testExists = existsSync(testPath);

if (problemExists && testExists) {
  console.warn(
    `${chalk.yellowBright('All files already exist.')}
  ${chalk.gray(problemPath)}
  ${chalk.gray(testPath)}
`,
  );
  process.exit(0);
}

const url = `https://www.acmicpc.net/problem/${problemNumber}`;
const dom = parseDocument(
  await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.text();
  }),
);

const title = DomUtils.textContent(
  DomUtils.findAll(
    (element) => element.attribs?.id === 'problem_title',
    dom.children,
  )[0],
).trim();

const testCases = R.chunk(
  DomUtils.findAll((element) => element.tagName === 'pre', dom.children).map(
    (element) => DomUtils.textContent(element).replace(/\r/g, '').trim(),
  ),
  2,
);

if (problemExists) {
  console.warn(
    `${chalk.yellowBright('File already exists.')}
  ${chalk.gray(problemPath)}
`,
  );
} else {
  writeFileSync(problemPath, await format(getProblemTemplate({ url, title })));
}

if (testExists) {
  console.warn(
    `${chalk.yellowBright('File already exists.')}
  ${chalk.gray(testPath)}
`,
  );
} else {
  writeFileSync(
    testPath,
    await format(getTestTemplate({ cases: testCases, number: problemNumber })),
  );
}

function getProblemTemplate({ url, title }) {
  return `/**
* @see [${title}](${url})
*
* @param {string} input
*/
function solution(input) {}

if (process.env.NODE_ENV !== 'test') {
  console.log(solution(require('fs').readFileSync('/dev/stdin', 'utf8')));
}

module.exports = solution;
`;
}

function getTestTemplate({ cases, number }) {
  return `import { expect, test } from 'vitest';

import solution from '../src/${number}.cjs';
  
const cases = ${JSON.stringify(cases)};
  
test.each(cases)('#%#', (input, output) => {
  expect(String(solution(input)).trim()).toBe(output);
});
`;
}

function format(string) {
  return prettier(string, { parser: 'babel', singleQuote: true });
}
