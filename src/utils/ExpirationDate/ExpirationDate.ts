/**
 *
 * Calculates the expirate date of the access token based on the duration in seconds
 *
 * @param {number} expires_in - Duration in seconds until expiration
 * @returns {number} - The expiration date in ms
 */
export function calculateExpirationDate(expires_in: number) {
  const now = Date.now();
  const expirationTime = now + new Date(expires_in * 1000).getTime();

  return expirationTime;
}
