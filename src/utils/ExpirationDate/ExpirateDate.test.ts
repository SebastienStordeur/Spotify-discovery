import { calculateExpirationDate } from "./ExpirationDate";

describe("calculateExpirationDate", () => {
  it("should generate the exact expiration time of the spotify token", () => {
    const duration = 3600;
    const expirationTime = calculateExpirationDate(duration);
    const now = Date.now();
    const expectedExpirationTime = now + duration * 1000;

    // Added a 100ms tolerance range
    expect(typeof expirationTime).toBe("number");
    expect(expirationTime).toBeGreaterThanOrEqual(expectedExpirationTime - 100);
    expect(expirationTime).toBeLessThanOrEqual(expectedExpirationTime + 100);
  });
});
