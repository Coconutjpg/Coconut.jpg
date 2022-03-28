const {sum, multiply} = require("./sum.js");//import multiple functions from same file

test("adds 2 + 3 to equal 5" , () => {//test first function
  expect(sum(2,3)).toBe(5);
});

test("2 * 3 to equal 6" , () => {//test second function
  expect(multiply(2,3)).toBe(6);
});

