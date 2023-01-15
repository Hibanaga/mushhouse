export function shorten(string: string, length: number, addDots = false): string {
    if (!string || typeof string !== 'string')  return '';

    let newString = string.substring(0, length);
    if (string.length > length && addDots) newString = newString + '...';

    return newString;
}
