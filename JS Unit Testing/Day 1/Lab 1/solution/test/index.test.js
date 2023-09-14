const { capitalizeText, createArray } = require("../index.js");
const { expect, assert } = require("chai");
const should = require("chai").should();

describe("Testing the capitalizeText function", () => {
  it("Case 1: passing a string and expecting the capitalized", () => {
    capitalizeText("hamada").should.to.be.a("string").equal("HAMADA");
  });

  // pending test case
  it.skip("passing a string and expecting the capitalized", () => {
    capitalizeText("hamada").should.to.be.a("string").equal("HAMADA");
  });

  it("Case 2: passing a number and expecting an error", () => {
    assert.throw(
      () => capitalizeText(1),
      TypeError,
      "parameter should be string"
    );
  });
});

describe("Testing the createArray function", () => {
  it("test that the return value of type array", () => {
    expect(createArray(2)).to.be.an("array");
  });

  it("test if we pass 3 it will return array of length 3 and test it's include 1", () => {
    expect(createArray(3)).to.have.lengthOf(3).that.include(1);
  });
});

setTimeout(() => {
  run();
}, 5000);
