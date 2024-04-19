import Greetable from "./greetable";
import GreetIn from "./greetin";
import { language } from "./language";
import db from "./db";

export default class GreetablePsql implements Greetable {
    constructor(private greetLanguages: Map<language, GreetIn>) {
        this.greetLanguages = greetLanguages;
    }
//get the name from the user_greet_count table
    async greet(firstName: string, chosenLanguage: language): Promise<string> {
        try {
            const user = await db.oneOrNone(
                'SELECT firstname FROM user_greet_counts WHERE firstname = $1',
                [firstName]
            );

            // greet the user when found
            if (user) {
                const greetIn = this.greetLanguages.get(chosenLanguage);
                if (greetIn) {
                    return await greetIn.greet(user.firstname);
                }
            }

            // Return an empty string if the user or language is not the appropriate one
            return "";
        } catch (error) {
            console.error('Error greeting user:', error);
            throw error;
        }
    }
}