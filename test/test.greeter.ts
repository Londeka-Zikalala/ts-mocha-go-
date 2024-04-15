import GreetInXhosa from "../greetInXhosa";
import GreetInFrench from "../greetInFrench";
import GreetInAfrikaans from "../greetInAfrikaans";
import Greeter from "../greeter";
import GreetIn from "../greetin";
import assert from "assert";
import { language } from "../language";

describe('The Greeter function', function () {
    it('should greet a user in French, Xhosa and Afrikaans', function () {
        let greetMap = new Map<language, GreetIn>();
        greetMap.set(language.french, new GreetInFrench());
        greetMap.set(language.xhosa, new GreetInXhosa());
        greetMap.set(language.afr, new GreetInAfrikaans());

        let greeter = new Greeter(greetMap);

        assert.equal(greeter.greet("Bob", language.french), 'Bonjour, Bob');
        assert.equal(greeter.greet("Bob", language.xhosa), 'Molo, Bob');
        assert.equal(greeter.greet("Bob", language.afr), 'Hallo, Bob');
    });

    it('should return an empty string when a language is not recognised', function () {
        let greetMap = new Map<language, GreetIn>();
        greetMap.set(language.french, new GreetInFrench());
        greetMap.set(language.xhosa, new GreetInXhosa());
        let greeter = new Greeter(greetMap);

        assert.equal(greeter.greet("Bob", language.frech), '');

    });
});
