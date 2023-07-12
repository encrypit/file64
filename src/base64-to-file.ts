/* istanbul ignore file */

/**
 * Converts Base64 to File.
 *
 * @param base64 - Base64.
 * @param filename - Filename.
 * @param options - Options.
 * @returns - File.
 */
export async function base64ToFile(
  base64: string,
  filename: string,
  options?: FilePropertyBag,
): Promise<File> {
  const response = await fetch(base64);
  const blob = await response.blob();
  return new File([blob], filename, options);
}
