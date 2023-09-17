//? https://www.chaijs.com/api/assert/#method_isarray

const { sum, convertToArray, checkPositivity } = require("../index.js");

const { assert, expect } = require("chai");
const should = require("chai").should();

before(() => {
    console.log("before")
})


after(() => {
    console.log("after")
})

beforeEach(() => {
    console.log("beforeEach")
    // var obj = new Employee()
})

afterEach(() => {
    console.log("afterEach")
})

describe("test cases sum function", () => {
    ///////////
    it("test pass two pos nums", () => {
        // var obj = new Employee()
        assert.equal(sum(2, 3), 5)
        expect(sum(1, 1)).equal(2)
        sum(5, 6).should.equal(11)
    })

    it("pass string params", () => {
        expect(() => sum(1, "a")).throw(TypeError, "sum takes only num params");
        assert.throw(() => sum("a", "b"), TypeError, "sum takes only num params");
        (() => sum("a", 3)).should.Throw(TypeError, "sum takes only num params");
    })


});

describe(" test cases convertToArray fun", () => {
    it("assert style", () => {
        assert.isArray(convertToArray(1, 2, 3));
        assert.lengthOf(convertToArray(1, 2, 3), 3);
        assert.include(convertToArray(1, 20, 30), 1);
    });
    it("expect style", () => {
        expect(convertToArray(1, 2, 3)).to.be.an('array').to.have.lengthOf(3).that.include(2)
    });

    it("should style", () => {
        convertToArray(1, 4, 8).should.to.be.an("array").that.includes(4).have.lengthOf(3)
    })
});

describe("TDD", () => {
    it("checkPositivity with positive num", () => {
        expect(checkPositivity(3)).equal(true)
    })
    it("checkPositivity with negative num", () => {
        expect(checkPositivity(-3)).equal(false)
    })
});


setTimeout(() => {
    run()
}, 1000)

