import MapUserGreetCounter from "../IUserGreetCounter";
import assert from "assert";

describe('The MapUsergreetingsCounter class',  function () {
    it("should count the number of greeted people", async function () {
    let greetingsCounter = new MapUserGreetCounter()
      await greetingsCounter.countGreet("Londeka");
      await greetingsCounter.countGreet("Thando");
      await greetingsCounter.countGreet("Londeka");
      let result = await greetingsCounter.greetCounter()
    assert.equal(result,2);
  });

    it("should return the greet count for a specific user", async function () {
        let greetingsCounter = new MapUserGreetCounter()

   await  greetingsCounter.countGreet("Londeka");
   await greetingsCounter.countGreet("Thando");
   await greetingsCounter.countGreet("Londeka");
      let result1 = await greetingsCounter.userGreetCount("Londeka")
      let result2 = await greetingsCounter.userGreetCount("Thando")
    assert.equal(result1, 2);
      assert.equal(result2, 1);
  });

    it("should return 0 for the greet count for a user not greeted", async function () {
      let greetingsCounter = new MapUserGreetCounter()
      let result = await greetingsCounter.userGreetCount("Andre")
    assert.equal(result, 0);
  });
});