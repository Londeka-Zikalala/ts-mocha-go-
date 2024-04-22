import { Language } from "./Language";
import Greetable from "./greetable";
import UserGreetCounter from "./UserGreetCounter";

export default class Greeter implements Greetable, UserGreetCounter {
    private greetable: Greetable;
    private userGreetCounter: UserGreetCounter;

    constructor(greetable: Greetable, userGreetCounter: UserGreetCounter) {
        this.greetable = greetable;
        this.userGreetCounter = userGreetCounter;
    }

    async greet(name: string, chosenLanguage: Language): Promise<string> {
        // Get the greeting message
        const message = await this.greetable.greet(name, chosenLanguage);
        // Manage the user count
        await this.userGreetCounter.countGreet(name);
        return message;
    }

    async getGreetCounter(): Promise<number> {
        // Get the total greet count
        return this.userGreetCounter.greetCounter();
    }

    async userGreetCount(firstName: string): Promise<number> {
        // Get the greet count for a specific user
        return this.userGreetCounter.userGreetCount(firstName);
    }

    async countGreet(firstName: string): Promise<void> {
        // Count the greet for a specific user
        await this.userGreetCounter.countGreet(firstName);
    }

    async greetCounter(): Promise<number> {
        // Implement the greet counter method
        return this.userGreetCounter.greetCounter();
    }
}
