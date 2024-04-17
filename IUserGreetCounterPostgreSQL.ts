import db from "./db";
import userGreetCounter from "./userGreetCounter";
//to increment the counter overall counter when a new user is greeted 
export default class IUserGreetCounterSQL implements userGreetCounter {
    //insert a user  only once
    async countGreet(firstName: string): Promise <void> {
        try {
            
            if (firstName) {
                const user = await db.oneOrNone(
                    'SELECT * FROM user_greet_counts WHERE firstname = $1',
                    [firstName]
                );
                if (!user) {
                    await db.none(
                        `INSERT INTO  user_greet_counts (firstname, no_of_greets) VALUES ($1, $2)`,
                        [firstName, 1]
                    );
                } else {
                    await db.none(
                        `UPDATE user_greet_counts SET no_of_greets = no_of_greets + 1 WHERE firstname = $1`,
                        [firstName]
                    );
                }
            }
        } catch (error) {
            console.error('Error updating or inserting users', error);
        }
    }
     //total count
 async greetCounter():Promise <number> {
    try {
      const greetedNames = await db.manyOrNone(
    `SELECT firstname FROM user_greet_counts`
      );
      return greetedNames.length;
    } catch (error) {
      console.error('Error getting greeted names', error);
      return 0;
    }
    }
     // get the greet count for a specific user
  async userGreetCount(firstName: string): Promise<number> {
    try {
      const user = await db.oneOrNone(
        `SELECT * FROM user_greet_counts WHERE firstname = $1`, 
        [firstName]
      );
      return user ? user.no_of_greets : 0;
    } catch (error) {
      console.error('Error fetching user counter', error);
      return 0;
    }
  }

}