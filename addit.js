// function add(x, y) {
//     return x + y
// }
//
// function subtract(x, y) {
//     return x - y
// }
//
// module.exports = add

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { first_name: "Dewy" }
        user["last_name"] = "Johnson"
        return user
    }
}

module.exports = functions