import GreetInXhosa from "../greetInXhosa";
import GreetInFrench from "../greetInFrench";
import GreetInAfrikaans from "../greetInAfrikaans";
import Greeter from "../greeter";
import GreetIn from "../greetin";
import assert from "assert";
import { language } from "../language";
import GreetInManager from "../greetInManager";
import MapUserGreetCounter from "../IUserGreetCounter";

describe('The Greeter function', function () {
    
    it('should greet a user in French, Xhosa and Afrikaans',async function () {
        const greetlanguages = new Map<language, GreetIn>();
        await greetlanguages.set(language.french, new GreetInFrench());
        await greetlanguages.set(language.xhosa, new GreetInXhosa());
        await greetlanguages.set(language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetlanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();

        const greeter = new Greeter(greetManager,mapUserGreetCounter);
        let result1 = await greeter.greet("Bob", language.french)
        let result2 = await greeter.greet("Bob", language.xhosa)
        let result3 = await greeter.greet("Bob", language.afr)
        assert.equal(result1, 'Bonjour, Bob');
        assert.equal(result2, 'Molo, Bob');
        assert.equal(result3, 'Hallo, Bob');
    });

    it('should return an empty string when a language is not recognised',async function () {
        const greetlanguages = new Map<language, GreetIn>();
        await greetlanguages.set(language.french, new GreetInFrench());
        await greetlanguages.set(language.xhosa, new GreetInXhosa());
        await greetlanguages.set(language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetlanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();

        const greeter = new Greeter(greetManager,mapUserGreetCounter);
        let result1 = await greeter.greet("Bob", language.frnch)
        let result2 = await greeter.greet("Bob", language.xsa)
         let result3 = await greeter.greet("Bob", language.af)
        assert.equal(result1, '');
        assert.equal(result2, '');
        assert.equal(result3, '');
    });

    it('should count the number of greeted users', async function () {
        const greetlanguages = new Map<language, GreetIn>();
       await greetlanguages.set(language.french, new GreetInFrench());
       await greetlanguages.set(language.xhosa, new GreetInXhosa());
       await greetlanguages.set(language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetlanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();
        const greeter = new Greeter(greetManager,mapUserGreetCounter);

       await greeter.greet("Bob", language.french);
       await greeter.greet("Londeka", language.xhosa);
       await greeter.greet("Andre", language.xhosa);
        let result= await greeter.getGreetCounter()
        assert.equal(result, 3);
    });

    it('should increment the counter if a user greets multiple times', async function () {
        let greetLanguages = new Map<language, GreetIn>();
       await greetLanguages.set(language.french, new GreetInFrench());
       await greetLanguages.set(language.xhosa, new GreetInXhosa());
       await greetLanguages.set(language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();
        const greeter = new Greeter(greetManager,mapUserGreetCounter);
        
        await greeter.greet("Bob", language.french);
        await greeter.greet("Londeka", language.xhosa);
        await greeter.greet("Londeka", language.afr);
        let result = await greeter.getGreetCounter()
        assert.equal(result, 2);
    });
});