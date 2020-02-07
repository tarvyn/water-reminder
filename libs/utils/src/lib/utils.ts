import { DocumentQuery, Document } from 'mongoose';

/**
 * Utility function to make async/await code more readable.
 * (inspired by await-to-js library)
 */
export async function catchPromiseError<T>(
  promise: Promise<T> | DocumentQuery<T, Document>
): Promise<[Error, undefined] | [undefined, T]> {
  try {
    return [undefined, await promise];
  } catch (e) {
    return [e, undefined];
  }
}

export function getTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getNow(): Date {
  return new Date();
}
