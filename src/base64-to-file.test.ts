import { base64ToFile } from './base64-to-file';

describe('base64ToFile', () => {
  it('exports function', () => {
    expect(base64ToFile).toBeInstanceOf(Function);
  });

  it('converts Base64 with no data to File', async () => {
    const file = await base64ToFile(
      'data:application/octet-stream;base64,',
      ''
    );
    expect(file).toBeInstanceOf(File);
  });

  it('converts Base64 without type to File', async () => {
    const file = await base64ToFile('data:;base64,', '');
    expect(file).toBeInstanceOf(File);
    expect(file.type).toBe('');
  });

  it('converts Base64 with type to File', async () => {
    const file = await base64ToFile('data:text/plain;base64,YQ==', '');
    expect(file).toBeInstanceOf(File);
    expect(file.type).toBe('text/plain');
  });

  it('converts Base64 to File with filename', async () => {
    const file = await base64ToFile('data:text/plain;base64,YQ==', 'filename');
    expect(file.name).toBe('filename');
  });

  it('converts Base64 to File with type', async () => {
    const file = await base64ToFile(
      'data:application/octet-stream;base64,YQ==',
      '',
      { type: 'text/plain ' }
    );
    expect(file.type).toBe('text/plain');
  });
});
