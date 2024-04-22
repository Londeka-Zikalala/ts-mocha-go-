import GreetInFrench from "../GreetInFrench";
import assert from "assert";

describe('The greetInFrench function', function () {
    it('should greet a user in French', function () {
        const greeter = new GreetInFrench();
        const greeting = greeter.greet('Bob');
        assert.equal(greeting, 'Bonjour, Bob');
    });
});
