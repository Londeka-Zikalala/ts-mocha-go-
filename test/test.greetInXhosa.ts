import GreetInXhosa from "../greetInXhosa";
import assert from "assert";

describe('The greetInXhosa function', function () {
    it('should greet a user in Xhosa', function () {
        const greeter = new GreetInXhosa();
        const greeting = greeter.greet('Bob');
        assert.equal(greeting, 'Molo, Bob');
    });
});
