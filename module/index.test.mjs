import { describe, it } from 'node:test';

import assert from 'assert';

import {
  base64ToBlob,
  base64ToFile,
  blobToBase64,
  fileToBase64,
} from './index.mjs';

describe('index', () => {
  it('exports base64ToBlob', () => {
    assert.strictEqual(typeof base64ToBlob, 'function');
  });

  it('exports base64ToFile', () => {
    assert.strictEqual(typeof base64ToFile, 'function');
  });

  it('exports blobToBase64', () => {
    assert.strictEqual(typeof blobToBase64, 'function');
  });

  it('exports fileToBase64', () => {
    assert.strictEqual(typeof fileToBase64, 'function');
  });
});
