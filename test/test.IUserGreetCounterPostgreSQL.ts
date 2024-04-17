import IUserGreetCounterSQL from "../IUserGreetCounterPostgreSQL";
import assert from "assert";
import db from "../db";


describe('IUserGreetCounterSQL', function () {
    let counter: IUserGreetCounterSQL;
    this.timeout(60000)
    before(async function() {
        // Connect to the database before running tests
        await db.connect();
    });
    after(async function () {
        // Disconnect from the database after running tests
        await db.$pool.end();
    });
    beforeEach( async function () {
        //Clear table
        await db.none(`TRUNCATE TABLE user_greet_counts RESTART IDENTITY CASCADE`)
        // Reset the counter before each test
        counter = new IUserGreetCounterSQL();
    });

    it('should increment greet count for a new user', async function () {
        await counter.countGreet('Andre');
        await counter.countGreet('Londeka')
        await counter.countGreet('Londeka')
        await counter.countGreet('Thandeka')
        const greetCount = await counter.greetCounter();
        assert.equal(greetCount,3 );
    });

    it('should increment greet count for an existing user', async function () {
        await counter.countGreet('John');
        await counter.countGreet('John');
        const greetCount = await counter.userGreetCount('John');
        assert.equal(greetCount, 2);
    });

    it('should return total greet count', async function () {
        await counter.countGreet('Londeka');
        await counter.countGreet('Andre');
        const totalGreetCount = await counter.greetCounter();
        assert.equal(totalGreetCount, 2);
    });

    it('should return greet count for a specific user', async function () {
        await counter.countGreet('Londeka');
        await counter.countGreet('Londeka');
        await counter.countGreet('Andre')
        const greetCount1 = await counter.userGreetCount('Londeka');
        const greetCount2 = await counter.userGreetCount('Andre')
        assert.equal(greetCount1, 2);
        assert.equal(greetCount2, 1)
    });

    it('should return 0 greet count for non-existing user', async function () {
        await counter.countGreet('Londeka');
        const greetCount = await counter.userGreetCount('Thando');
        assert.equal(greetCount, 0);
    });

    
});