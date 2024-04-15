import GreetInXhosa from "../greetInXhosa";
import GreetInFrench from "../greetInFrench";
import GreetInAfrikaans from "../greetInAfrikaans";
import Greeter from "../greeter";
import GreetIn from "../greetin";
import assert from "assert";
import { language } from "../language";
import MapUserGreetCounter from "../IUserGreetCounter";

describe('The Greeter function', function () {
    it('should greet a user in French, Xhosa and Afrikaans', function () {
        let greetMap = new Map<language, GreetIn>();
        let mapUserGreetCounter = new MapUserGreetCounter()
        greetMap.set(language.french, new GreetInFrench());
        greetMap.set(language.xhosa, new GreetInXhosa());
        greetMap.set(language.afr, new GreetInAfrikaans());

        let greeter = new Greeter(greetMap, mapUserGreetCounter);

        assert.equal(greeter.greet("Bob", language.french), 'Bonjour, Bob');
        assert.equal(greeter.greet("Bob", language.xhosa), 'Molo, Bob');
        assert.equal(greeter.greet("Bob", language.afr), 'Hallo, Bob');
    });

    it('should return an empty string when a language is not recognised', function () {
        let greetMap = new Map<language, GreetIn>();
        let mapUserGreetCounter = new MapUserGreetCounter()

        greetMap.set(language.french, new GreetInFrench());
        greetMap.set(language.xhosa, new GreetInXhosa());
        let greeter = new Greeter(greetMap, mapUserGreetCounter);

        assert.equal(greeter.greet("Bob", language.frech), '');

    });
    it('should count the number of greeted users', function () {
        let greetMap = new Map<language, GreetIn>();
        let mapUserGreetCounter = new MapUserGreetCounter()

        greetMap.set(language.french, new GreetInFrench());
        greetMap.set(language.xhosa, new GreetInXhosa());
        let greeter = new Greeter(greetMap, mapUserGreetCounter);
        greeter.greet("Bob", language.french);
        greeter.greet("Londeka", language.xhosa);
        greeter.greet("Andre", language.xhosa);

        assert.equal(greeter.greetCounter, 3);

    })
    it('should increment the counter if a user greets multiple times', function () {
        let greetMap = new Map<language, GreetIn>();
        let mapUserGreetCounter = new MapUserGreetCounter()

        greetMap.set(language.french, new GreetInFrench());
        greetMap.set(language.xhosa, new GreetInXhosa());
        let greeter = new Greeter(greetMap, mapUserGreetCounter);
        greeter.greet("Bob", language.french);
        greeter.greet("Londeka", language.xhosa);
        greeter.greet("Londeka", language.afr);

        assert.equal(greeter.greetCounter, 2);

    })

});
