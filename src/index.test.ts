import { base64ToBlob, base64ToFile, blobToBase64, fileToBase64 } from '.';

it.each([base64ToBlob, base64ToFile, blobToBase64, fileToBase64])(
  'exports %p',
  (func) => {
    expect(func).toBeInstanceOf(Function);
  },
);
