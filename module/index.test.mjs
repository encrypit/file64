import { describe, it } from 'node:test';

import assert from 'assert';

import * as index from './index.mjs';

describe('index', () => {
  it('exports object', () => {
    assert.strictEqual(typeof index, 'object');
  });
});
