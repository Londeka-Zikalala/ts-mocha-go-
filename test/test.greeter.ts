import GreetInXhosa from "../GreetInXhosa";
import GreetInFrench from "../GreetInFrench";
import GreetInAfrikaans from "../GreetInAfrikaans";
import Greeter from "../greeter";
import GreetIn from "../Greetin";
import assert from "assert";
import { Language } from "../Language";
import GreetInManager from "../GreetInManager";
import MapUserGreetCounter from "../UserGreetCounterImplementation";

describe('The Greeter function', function () {
    
    it('should greet a user in French, Xhosa and Afrikaans',async function () {
        const greetLanguages = new Map<Language, GreetIn>();
        await greetLanguages.set(Language.french, new GreetInFrench());
        await greetLanguages.set(Language.xhosa, new GreetInXhosa());
        await greetLanguages.set(Language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();

        const greeter = new Greeter(greetManager,mapUserGreetCounter);
        let result1 = await greeter.greet("Bob", Language.french)
        let result2 = await greeter.greet("Bob", Language.xhosa)
        let result3 = await greeter.greet("Bob", Language.afr)
        assert.equal(result1, 'Bonjour, Bob');
        assert.equal(result2, 'Molo, Bob');
        assert.equal(result3, 'Hallo, Bob');
    });

    it('should return an empty string when a Language is not recognised',async function () {
        const greetLanguages = new Map<Language, GreetIn>();
        await greetLanguages.set(Language.french, new GreetInFrench());
        await greetLanguages.set(Language.xhosa, new GreetInXhosa());
        await greetLanguages.set(Language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();

        const greeter = new Greeter(greetManager,mapUserGreetCounter);
        let result1 = await greeter.greet("Bob", Language.frnch)
        let result2 = await greeter.greet("Bob", Language.xsa)
         let result3 = await greeter.greet("Bob", Language.af)
        assert.equal(result1, '');
        assert.equal(result2, '');
        assert.equal(result3, '');
    });

    it('should count the number of greeted users', async function () {
        const greetLanguages = new Map<Language, GreetIn>();
       await greetLanguages.set(Language.french, new GreetInFrench());
       await greetLanguages.set(Language.xhosa, new GreetInXhosa());
       await greetLanguages.set(Language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();
        const greeter = new Greeter(greetManager,mapUserGreetCounter);

       await greeter.greet("Bob", Language.french);
       await greeter.greet("Londeka", Language.xhosa);
       await greeter.greet("Andre", Language.xhosa);
        let result= await greeter.getGreetCounter()
        assert.equal(result, 3);
    });

    it('should increment the counter if a user greets multiple times', async function () {
        let greetLanguages = new Map<Language, GreetIn>();
       await greetLanguages.set(Language.french, new GreetInFrench());
       await greetLanguages.set(Language.xhosa, new GreetInXhosa());
       await greetLanguages.set(Language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const mapUserGreetCounter = new MapUserGreetCounter();
        const greeter = new Greeter(greetManager,mapUserGreetCounter);
        
        await greeter.greet("Bob", Language.french);
        await greeter.greet("Londeka", Language.xhosa);
        await greeter.greet("Londeka", Language.afr);
        let result = await greeter.getGreetCounter()
        assert.equal(result, 2);
    });
});