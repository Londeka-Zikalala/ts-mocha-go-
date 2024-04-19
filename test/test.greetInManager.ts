import assert from "assert";
import { language } from "../language";
import GreetIn from "../greetin";
import GreetInManager from "../greetInManager";
import GreetInXhosa from "../greetInXhosa";
import GreetInFrench from "../greetInFrench";
import GreetInAfrikaans from "../greetInAfrikaans";


describe('GreetInManager', function () {
    it('should greet a user in a chosen language', async function()  {
        const greetLanguages = new Map<language, GreetIn>();
        greetLanguages.set(language.french, new GreetInFrench());
        greetLanguages.set(language.xhosa, new GreetInXhosa());

        const greetManager = new GreetInManager(greetLanguages);
        const greetMessage = await greetManager.greet('Bob', language.french);

        assert.strictEqual(greetMessage, 'Bonjour, Bob');
    });

    it('should return an empty string if the chosen language is not available', async function(){
        const greetLanguages = new Map<language, GreetIn>();
        greetLanguages.set(language.french, new GreetInFrench());
        greetLanguages.set(language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const greetMessage = await greetManager.greet('Bob', language.af);

        assert.strictEqual(greetMessage, '');
    });
});