const sum = require("./sum");

describe("calculation of two numbers", () => {
  test("addition of two number", () => {
    const result = sum(5, 3);
    expect(result).toBe(8);
  });

  describe("greater and less than matcher", () => {
    test("addition of two numbers", () => {
      const result = sum(10, 30);
      expect(result).toBeLessThan(50);
    });

    test("addition of two number", () => {
      const result = sum(50, 30);
      expect(result).toBeGreaterThan(75);
    });

    test("addition of two number", () => {
      const result = sum(50, 30);
      expect(result).toBeGreaterThanOrEqual(80);
    });

    test("addition of two number", () => {
      const result = sum(50, 30);
      expect(result).toBeLessThanOrEqual(80);
    });
  });
});
