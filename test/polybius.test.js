
// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius")

describe("polybius() function test", () => {
    describe("error handling", () => {
        it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, should return false ", () => {
            const input = "44324233521254134"
            const actual = polybius(input, false)
            expect(actual).to.be.false
        })
        it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown", () => {
            const input = "4432423352125413"
            const actual = polybius(input, false)
            const expected = 'th(i/j)nkful'
            expect(actual).to.equal(expected)
        })
    })
    describe("encoding/decoding ", () => {
        it("Encode correctly", () => {
            const input = "thinkful"
            const actual = polybius(input)
            const expected = '4432423352125413'
            expect(actual).to.equal(expected)
        })
        it("Decode correctly", () => {
            const input = "4432423352125413"
            const actual = polybius(input, false)
            const expected = 'th(i/j)nkful'
            expect(actual).to.equal(expected)
        })
        it("Spaces should be maintained throughout", () => {
            const input = "3251131343 2543241341"
            const actual = polybius(input, false)
            const expected = 'hello world'
            expect(actual).to.equal(expected)
        })
    })
})