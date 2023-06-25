/**
 * Converts Base64 to Blob.
 *
 * @param base64 - Base64.
 * @returns - Blob.
 */
export async function base64ToBlob(base64: string): Promise<Blob> {
  const response = await fetch(base64);
  let blob = await response.blob();
  const mimeType = getMimeType(base64);
  if (mimeType) {
    // https://stackoverflow.com/a/50875615
    blob = blob.slice(0, blob.size, mimeType);
  }
  return blob;
}

const mimeRegex = /^data:(.+);base64,/;

/**
 * Gets MIME type from Base64.
 *
 * @param base64 - Base64.
 * @returns - MIME type.
 */
function getMimeType(base64: string) {
  return base64.match(mimeRegex)?.slice(1, 2).pop();
}
