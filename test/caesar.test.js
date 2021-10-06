
// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar")

describe("ceasar() function test", () => {
    describe("error handling", () => {
        it("If the shift value is not present, the function should return false ", () => {
            const input = "thinkful"
            const shift = ""
            const actual = caesar(input, shift)
            expect(actual).to.be.false
        })

    })
})