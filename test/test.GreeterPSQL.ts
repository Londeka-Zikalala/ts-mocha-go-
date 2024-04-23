import GreeterPSQL from '../GreeterPSQL';
import { Language } from '../Language';
import db from '../db';
import assert from 'assert';

const greeter = new GreeterPSQL(db);

describe('GreeterPSQL', function () {
  this.timeout(60000)
  before(async function() {
    // Connect to the database before running tests
    await db.connect();
  });

  beforeEach(async function () {
    // Clear existing test data
    await db.none(`TRUNCATE TABLE users RESTART IDENTITY CASCADE`);
  });

  it('should greet in the specified language', async function () {
    const chosenLanguage = Language.french;
    const firstName = 'Londeka';

    const result = await greeter.greet(firstName, chosenLanguage);

    assert.equal(result, 'Bonjour, Londeka');
  });

  it('should throw an error if language is not found', async function () {
    const chosenLanguage = Language.english;
    const firstName = 'Londeka';

    try {
      await greeter.greet(firstName, chosenLanguage);
      assert.fail('Expected an error to be thrown');
    } catch (error) {
      assert.equal(error.message, 'Error fetching greeting');

    }
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
