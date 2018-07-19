jest.dontMock("addit.js")
describe("addit", function() {
    it("it adds two numbers", function() {
        const addIt = require("addit")
        expect(addIt(3, 2).toBe(5))
    })
} )