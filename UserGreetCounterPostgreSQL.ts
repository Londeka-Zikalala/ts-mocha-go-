import UserGreetCounter from "./UserGreetCounter";
import { IDatabase } from 'pg-promise';


export default class UserGreetCounterSQL implements UserGreetCounter {
  constructor(private db: IDatabase<any>) {}


    async countGreet(firstName: string): Promise<void> {
        try {
            if (firstName) {
                const user = await this.db.oneOrNone(
                    'SELECT * FROM user_greet_count WHERE firstname = $1',
                    [firstName]
                );
                if (!user) {
                    await this.db.none(
                        `INSERT INTO  user_greet_count (firstname, no_of_greets) VALUES ($1, $2)`,
                        [firstName, 1]
                    );
                } else {
                    await this.db.none(
                        `UPDATE user_greet_count SET no_of_greets = no_of_greets + 1 WHERE firstname = $1`,
                        [firstName]
                    );
                }
            }
        } catch (error) {
            console.error('Error updating or inserting users', error);
        }
    }

    async greetCounter(): Promise<number> {
        try {
            const greetedNames = await this.db.manyOrNone(
                `SELECT firstname FROM user_greet_count`
            );
            return greetedNames.length;
        } catch (error) {
            console.error('Error getting greeted names', error);
            return 0;
        }
    }

    async userGreetCount(firstName: string): Promise<number> {
        try {
            const user = await this.db.oneOrNone(
                `SELECT * FROM user_greet_count WHERE firstname = $1`,
                [firstName]
            );
            return user ? user.no_of_greets : 0;
        } catch (error) {
            console.error('Error fetching user counter', error);
            return 0;
        }
    }
}