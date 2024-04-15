import GreetInAfrikaans from "../greetInAfrikaans";
import assert from "assert";

describe('The greetInAfrikaans function', function () {
    it('should greet a user in Afrikaans', function () {
        const greeter = new GreetInAfrikaans();
        const greeting = greeter.greet('Bob');
        assert.equal(greeting, 'Hallo, Bob');
    });
});
