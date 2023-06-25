import { base64ToBlob } from './base64-to-blob';

describe('base64ToBlob', () => {
  it('exports function', () => {
    expect(base64ToBlob).toBeInstanceOf(Function);
  });

  it('converts Base64 with no data to Blob', async () => {
    const blob = await base64ToBlob('data:application/octet-stream;base64,');
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('application/octet-stream');
  });

  it('converts Base64 without type to Blob', async () => {
    const blob = await base64ToBlob('data:;base64,');
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('text/plain;charset=us-ascii');
  });

  it('converts Base64 to Blob', async () => {
    const blob = await base64ToBlob('data:text/plain;base64,YQ==');
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('text/plain');
  });
});
