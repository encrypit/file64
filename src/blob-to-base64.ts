/**
 * Converts Blob to Base64.
 *
 * @param blob - Blob.
 * @returns - Base64.
 */
export async function blobToBase64(blob: Blob): Promise<string> {
  return typeof FileReader === 'function'
    ? blobToBase64Browser(blob)
    : blobToBase64Node(blob);
}

enum Event {
  error = 'error',
  loadend = 'loadend',
}

/**
 * Converts Blob to Base64 in the browser.
 *
 * @param blob - Blob.
 * @returns - Base64.
 */
async function blobToBase64Browser(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      const handleLoadend = () => {
        resolve(reader.result as string);
        reader.removeEventListener(Event.loadend, handleLoadend);
      };

      reader.addEventListener(Event.loadend, handleLoadend);

      /* istanbul ignore next */
      const handleError = () => {
        reject(reader.error);
        reader.removeEventListener(Event.error, handleError);
      };

      reader.addEventListener(Event.error, handleError);

      reader.readAsDataURL(blob);
    } catch (error) {
      /* istanbul ignore next */
      reject(error);
    }
  });
}

const defaultMimeType = 'application/octet-stream';

/**
 * Converts Blob to Base64 in Node.js.
 *
 * @param blob - Blob.
 * @returns - Base64.
 */
async function blobToBase64Node(blob: Blob): Promise<string> {
  const buffer = Buffer.from(await blob.text());
  const mimeType = blob.type || defaultMimeType;
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}
