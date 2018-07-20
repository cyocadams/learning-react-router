const functions = require("learning-react-router/functions")

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

test("Should be under 1600", () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i)
})

test("Admin should be in usernames", () => {
    usernames = ["John", "Karen", "Admin"]
    expect(usernames).toContain("Admin")
})