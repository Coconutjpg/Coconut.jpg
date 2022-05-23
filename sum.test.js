const {sum, multiply, divide} = require("./sum.js");//import multiple functions from same file

test("adds 2 + 3 to equal 5" , () => {//test first function
  expect(sum(2,3)).toBe(5);
});


