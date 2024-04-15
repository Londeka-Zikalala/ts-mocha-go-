import MapUserGreetCounter from "../IUserGreetCounter";
import assert from "assert";

describe('The MapUsergreetingsCounter class', function () {
    it("should count the number of greetings", function () {
    let greetingsCounter = new MapUserGreetCounter()
    greetingsCounter.countGreet("Londeka");
    greetingsCounter.countGreet("Thando");
    greetingsCounter.countGreet("Londeka");

    assert.equal(greetingsCounter.greetCounter,2);
  });

    it("should return the greet count for a specific user", function () {
        let greetingsCounter = new MapUserGreetCounter()

    greetingsCounter.countGreet("Londeka");
    greetingsCounter.countGreet("Thando");
    greetingsCounter.countGreet("Londeka");

    assert.equal(greetingsCounter.userGreetCount("Londeka"), 2);
    assert.equal(greetingsCounter.userGreetCount("Thando"), 1);
  });

    it("should return 0 for the greet count for a user not greeted", function () {
        let greetingsCounter = new MapUserGreetCounter()
    assert.equal(greetingsCounter.userGreetCount("Andre"), 0);
  });
});