
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
        it("If the shift value is less than -25, the function should return false ", () => {
            const input = "thinkful"
            const shift = -30
            const actual = caesar(input, shift)
            expect(actual).to.be.false
        })
        it("If the shift value is greater than 25, the function should return false ", () => {
            const input = "thinkful"
            const shift = 40
            const actual = caesar(input, shift)
            expect(actual).to.be.false
        })
    })
    describe("encoding/decoding ", () => {
        it("Encode correctly", () => {
            const input = "thinkful"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = 'wklqnixo'
            expect(actual).to.equal(expected)
        })
        it("Decode correctly", () => {
            const input = "wklqnixo"
            const shift = 3
            const actual = caesar(input, shift, false)
            const expected = 'thinkful'
            expect(actual).to.equal(expected)
        })
        it("Spaces should be maintained throughout", () => {
            const input = "This is a secret message!"
            const shift = 8
            const actual = caesar(input, shift)
            const expected = 'bpqa qa i amkzmb umaaiom!'
            expect(actual).to.equal(expected)
        })
    })
})