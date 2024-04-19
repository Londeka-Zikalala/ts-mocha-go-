import { language } from "./language";
import Greetable from "./greetable";
import MapUserGreetCounter from "./IUserGreetCounter";

export default class Greeter implements Greetable {
    private greetable: Greetable;
    private userGreetCounter: MapUserGreetCounter;

    constructor(greetable: Greetable, userGreetCounter: MapUserGreetCounter) {
        this.greetable = greetable;
        this.userGreetCounter = userGreetCounter;
    }

    greet(name: string, chosenLanguage: language): Promise<string> {
        // get the greeting message
        let message = this.greetable.greet(name, chosenLanguage);
        // manage the user count
        this.userGreetCounter.countGreet(name);
        return message;
    }

    getGreetCounter(): Promise<number> {
        return this.userGreetCounter.greetCounter();
    }

     userGreetCount(firstName: string): Promise<number> {
        return  this.userGreetCounter.userGreetCount(firstName);
    }
}