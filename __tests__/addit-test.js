const functions = require("learning-react-router/addit")

test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4)
})

test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test("Should be null",  () => {
    expect(functions.isNull()).toBeNull()
})

test("Should be falsy", () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

test("User should be Dewy Johnson object", () => {
    expect(functions.createUser()).toEqual({
        first_name: "Dewy",
        last_name: "Johnson"
    })
})