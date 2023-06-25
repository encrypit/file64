import { blobToBase64 } from './blob-to-base64';

describe('blobToBase64', () => {
  it('exports function', () => {
    expect(blobToBase64).toBeInstanceOf(Function);
  });

  it('converts empty Blob without type to Base64', async () => {
    const blob = new Blob([]);
    expect(await blobToBase64(blob)).toBe(
      'data:application/octet-stream;base64,'
    );
  });

  it('converts Blob without type to Base64', async () => {
    const blob = new Blob(['a']);
    expect(await blobToBase64(blob)).toBe(
      'data:application/octet-stream;base64,YQ=='
    );
  });

  it('converts Blob with type to Base64', async () => {
    const blob = new Blob(['a'], { type: 'text/plain' });
    expect(await blobToBase64(blob)).toBe('data:text/plain;base64,YQ==');
  });

  it.skip('rejects if there is an error', async () => {
    const blob = new Blob([]);
    const spy = jest
      .spyOn(global, 'FileReader')
      .mockRejectedValueOnce('error' as never);
    expect(blobToBase64(blob)).rejects.toBe('error');
    spy.mockRestore();
  });
});
