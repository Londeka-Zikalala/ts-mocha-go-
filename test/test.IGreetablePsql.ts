import GreetablePsql from "../IGreetablePsql";
import GreetInFrench from "../greetInFrench";
import GreetInAfrikaans from "../greetInAfrikaans";
import GreetInXhosa from "../greetInXhosa";
import IUserGreetCounterSQL from "../IUserGreetCounterPostgreSQL";
import assert from "assert";
import db from "../db";
import GreetIn from "../greetin";
import { language } from "../language";

describe('GreetablePsql', () => {
    let greeting: GreetablePsql;
    let setName: IUserGreetCounterSQL
    before(async function() {
        // Connect to the database before running tests
        await db.connect();
    });
    
    beforeEach( async function () {
        //Clear table
        await db.none(`TRUNCATE TABLE user_greet_counts RESTART IDENTITY CASCADE`)
        // Reset the counter before each test
        setName = new IUserGreetCounterSQL();
    });

    it('should greet a user using a selected language', async function (){
        const greetlanguages = new Map<language, GreetIn>();
        await greetlanguages.set(language.french, new GreetInFrench());
        await greetlanguages.set(language.xhosa, new GreetInXhosa());
        await greetlanguages.set(language.afr, new GreetInAfrikaans());
        await setName.countGreet('Bob')
        const result = await greeting.greet('Bob', language.xhosa);

        // Assert that the result matches the expected greeting
        assert.equal(result, 'Molo, Bob');
    });

    it('should return an empty string if user does not exist', async function() {
        const greetlanguages = new Map<language, GreetIn>();
        await greetlanguages.set(language.french, new GreetInFrench());
        await greetlanguages.set(language.xhosa, new GreetInXhosa());
        await greetlanguages.set(language.afr, new GreetInAfrikaans());
        await setName.countGreet('Bob')
        const result = await greeting.greet('Alice', language.xhosa);

        assert.equal(result, '');
    });

    it('should return an empty string if language is unrecognized', async function() {
        const greetlanguages = new Map<language, GreetIn>();
        await greetlanguages.set(language.french, new GreetInFrench());
        await greetlanguages.set(language.xhosa, new GreetInXhosa());
        await greetlanguages.set(language.afr, new GreetInAfrikaans());
        await setName.countGreet('Bob')
        const result = await greeting.greet('Bob', language.fr);

        assert.equal(result, '');
    });
    after(async function () {
        try {
            // Disconnect from the database after running tests
            await db.$pool.end();
        } catch (error) {
            console.error('Error occurred while closing the database connection:', error);
        }
    });
});
