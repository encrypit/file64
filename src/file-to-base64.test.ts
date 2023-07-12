import { fileToBase64 } from './file-to-base64';

describe('fileToBase64', () => {
  it('exports function', () => {
    expect(fileToBase64).toBeInstanceOf(Function);
  });

  it('converts empty file without type to Base64', async () => {
    const file = new File([], '');
    expect(await fileToBase64(file)).toBe(
      'data:application/octet-stream;base64,',
    );
  });

  it('converts file without type to Base64', async () => {
    const file = new File(['a'], '');
    expect(await fileToBase64(file)).toBe(
      'data:application/octet-stream;base64,YQ==',
    );
  });

  it('converts file with type to Base64', async () => {
    const file = new File(['a'], '', { type: 'text/plain' });
    expect(await fileToBase64(file)).toBe('data:text/plain;base64,YQ==');
  });
});
