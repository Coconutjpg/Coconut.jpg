const sum = require("./sum.js");

test("adds 2 + 3 to equal 5" , () => {
  expect(sum(2,3)).toBe(5);
})

test("multiply 2 and 3 to equal 6" , () => {
  expect(multiply(2,3)).toBe(6);
})
