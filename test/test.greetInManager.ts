import assert from "assert";
import { Language } from "../Language";
import GreetIn from "../Greetin";
import GreetInManager from "../GreetInManager";
import GreetInXhosa from "../GreetInXhosa";
import GreetInFrench from "../GreetInFrench";
import GreetInAfrikaans from "../GreetInAfrikaans";


describe('GreetInManager', function () {
    it('should greet a user in a chosen Language', async function()  {
        const greetLanguages = new Map<Language, GreetIn>();
        greetLanguages.set(Language.french, new GreetInFrench());
        greetLanguages.set(Language.xhosa, new GreetInXhosa());

        const greetManager = new GreetInManager(greetLanguages);
        const greetMessage = await greetManager.greet('Bob', Language.french);

        assert.strictEqual(greetMessage, 'Bonjour, Bob');
    });

    it('should return an empty string if the chosen Language is not available', async function(){
        const greetLanguages = new Map<Language, GreetIn>();
        greetLanguages.set(Language.french, new GreetInFrench());
        greetLanguages.set(Language.afr, new GreetInAfrikaans());

        const greetManager = new GreetInManager(greetLanguages);
        const greetMessage = await greetManager.greet('Bob', Language.af);

        assert.strictEqual(greetMessage, '');
    });
});