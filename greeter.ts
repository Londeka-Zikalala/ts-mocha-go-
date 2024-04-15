import { language } from "./language";
import GreetIn from "./greetin";
import MapUserGreetCounter from "./IUserGreetCounter";


export default class Greeter {
    //A map that has a languages enum as a key and a GreetIn interface instance as a value
    private greetLanguages: Map<language, GreetIn>;
    private userGreetCounter: MapUserGreetCounter;

    constructor(greetLanguages: Map<language, GreetIn>, userGreetCounter: MapUserGreetCounter) {
        this.greetLanguages = greetLanguages;
        this.userGreetCounter = userGreetCounter;
    }

    greet(name: string, chosenLanguage: language) {
        let greetIn = this.greetLanguages.get(chosenLanguage);
        // keep track of how many users has been greeted
        this.userGreetCounter.countGreet(name);
        if (greetIn) {
            return greetIn.greet(name);
        }
        return "";
    }

       // call the greetCounter on the userGreetCounter
       public get greetCounter(): number {
        return this.userGreetCounter.greetCounter;
    }
    
    // call the userGreetCount on the userGreetCounter
    userGreetCount(firstName: string): number {
        return this.userGreetCounter.userGreetCount(firstName);
    }
}