// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution")

describe("substitution() function test", () => {
    describe("error handling", () => {
        it("should return false if the given alphabet isn't 26 charcaters long", () => {
            const input = "thinkful"
            const alphabet = "xsdrcftvyg"
            const actual = substitution(input, alphabet)
            expect(actual).to.be.false
        })
        it("should return false if there are duplicate characters in the alphabet", () => {
            const input = "thinkful"
            const alphabet = "abcabcabcabcabcabcabcabcyz"
            const actual = substitution(input, alphabet)
            expect(actual).to.be.false
        })
    })

    describe("encoding/decoding ", () => {
        it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
            const input = "y&ii$r&"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            const actual = substitution(input, alphabet, false)
            const expected = "message"
            expect(actual).to.equal(expected)
        })
        it("should return false if there are duplicate characters in the alphabet", () => {
            const input = "You are an excellent spy"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const actual = substitution(input, alphabet)
            const expected = 'elp xhm xf mbymwwmfj dne'
            expect(actual).to.equal(expected)
        })
    })
})