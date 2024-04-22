import { IDatabase } from 'pg-promise';
import Greetable from './greetable';
import { Language } from './Language';


export default class GreeterPSQL implements Greetable {
  constructor(private db: IDatabase<any>) {}

  async greet(firstName: string, language: Language): Promise<string> {
    try {
      // Check if the user exists
      let user = await this.db.oneOrNone(
        'SELECT * FROM Users WHERE firstname = $1',
        [firstName]
      );

      // If the user does not exist, insert the user into the Users table
      if (!user) {
        await this.db.none(
          'INSERT INTO Users (firstname) VALUES ($1)',
          [firstName]
        );

        // Fetch the user
        user = await this.db.oneOrNone(
          'SELECT * FROM Users WHERE firstname = $1',
          [firstName]
        );
      }

      // Fetch the phrase for the specified language
      const chosenLanguage = await this.db.oneOrNone(
        'SELECT phrase FROM LanguagePhrases WHERE language = $1',
        [Language[language]]
      );

      // If language not found,
      if (!chosenLanguage) {
        throw new Error('Language not found');
      }

      // Concatenate the fetched name with the fetched phrase
      const greeting = `${chosenLanguage.phrase}, ${firstName}`;

      // Return the greeting
      return greeting;
    } catch (error) {
      throw new Error('Error fetching greeting');
    }
  }
}
