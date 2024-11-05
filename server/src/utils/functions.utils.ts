import { randomInt } from 'crypto';
export function generateRandomDigitsCode(length: number): string {
    return randomInt(10 ** (length - 1), 10 ** length - 1).toString();
}
