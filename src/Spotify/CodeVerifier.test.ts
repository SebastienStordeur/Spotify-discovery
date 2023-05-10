import { generateRandomString } from "./CodeVerifier";

describe("generateRandomString", () => {
  const length = 10;
  it("should generate a random string for the specified length", () => {
    const result = generateRandomString(length);

    expect(result).toHaveLength(length);
    expect(typeof result).toBe("string");
  });

  it("should generate a different string each time the function is called", () => {
    const result1 = generateRandomString(length);
    const result2 = generateRandomString(length);

    expect(result1).not.toBe(result2);
  });
});
