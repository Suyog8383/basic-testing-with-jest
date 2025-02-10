const sum = require("../sum");
beforeAll(() => {
  console.log("connection created");
});
beforeEach(() => {
  console.log("run before every test");
});
describe("calculation of two numbers", () => {
  test("addition of two number", () => {
    const result = sum(5, 3);
    expect(result).toBe(8);
  });

  test("check toequal&toBe for string", () => {
    let a = "suyog";
    let b = "suyog";
    expect(a).toEqual(b);
    expect(a).toBe(b);
  });

  test("check toequal&toBe for number", () => {
    let a = 10;
    let b = 10;
    expect(a).toEqual(b);
    expect(a).toBe(b);
  });

  test("check toequal&toBe for object", () => {
    let a = { name: "suyog" };
    let b = { name: "suyog" };
    expect(a).toEqual(b); //used for both primitive and no-primitive
    // expect(a).toBe(b); //used for primitive only
  });

  test("check truthy", () => {
    let val1 = true;
    let val2 = false;

    expect(val1).toBeTruthy();
    expect(val2).toBeFalsy();
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
