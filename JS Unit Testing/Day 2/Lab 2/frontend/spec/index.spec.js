const { MathUtils } = require("../index.js");

describe("MathUtils", () => {
  var mathUtils;
  beforeEach(() => {
    mathUtils = new MathUtils();
  });

  describe("sum", function () {
    it("should return the sum of two numbers", function () {
      expect(mathUtils.sum(2, 3)).toBe(5);
    });
    it("should return the sum of two negative numbers", function () {
      expect(mathUtils.sum(-2, -3)).toBe(-5);
    });

    it("should return zero when adding zero to a number", function () {
      expect(mathUtils.sum(0, 7)).toBe(7);
      expect(mathUtils.sum(-9, 0)).toBe(-9);
    });

    it("should handle decimal numbers correctly", function () {
      expect(mathUtils.sum(2.5, 1.5)).toBe(4);
      expect(mathUtils.sum(-2.75, 1.25)).toBe(-1.5);
    });

    it("should handle large numbers", function () {
      expect(mathUtils.sum(1e9, 2e9)).toBe(3e9);
    });

    it("should handle the case where one input is not a number", function () {
      expect(function () {
        mathUtils.sum("2", 3);
      }).toThrowError("Both inputs must be numbers");
    });
  });

  describe("subtract", function () {
    it("should return the subtraction of two numbers", function () {
      expect(mathUtils.subtract(5, 2)).toBe(3);
    });
  });

  describe("multiply", function () {
    it("should return the product of two numbers", function () {
      expect(mathUtils.multiply(2, 3)).toBe(6);
    });
  });

  describe("divide", function () {
    it("should return the division of two numbers", function () {
      expect(mathUtils.divide(6, 2)).toBe(3);
    });

    it("should throw an error when dividing by zero", function () {
      expect(function () {
        mathUtils.divide(5, 0);
      }).toThrowError("Cannot divide by zero");
    });
  });

  describe("average", function () {
    it("should return the average of two numbers", function () {
      expect(mathUtils.average(2, 4)).toBe(3);
    });
  });

  describe("factorial", function () {
    it("should return the factorial of a non-negative integer", function () {
      expect(mathUtils.factorial(5)).toBe(120);
    });

    it("should throw an error for negative numbers", function () {
      expect(function () {
        mathUtils.factorial(-1);
      }).toThrowError("There is no factorial for negative numbers");
    });
  });

  describe("checkPositivity", function () {
    it("should return true for positive numbers", function () {
      expect(mathUtils.checkPositivity(5)).toBe(true);
    });

    it("should return false for negative numbers", function () {
      expect(mathUtils.checkPositivity(-5)).toBe(false);
    });
  });
});
