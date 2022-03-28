const sum = require("./sum");
const sum = require("./multiply");

describe("sum suite", function(){
  test("adds 2 + 3 to equal 5" , () => {
    expect(sum(2,3)).toBe(5);
  });
  
   test("2 * 3 to equal 6" , () => {
     expect(multiply(2,3)).toBe(6);
   });
});
