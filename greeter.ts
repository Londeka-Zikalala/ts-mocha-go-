import { language } from "./language";
import GreetIn from "./greetin";
import { GreetInXhosa } from "./greetInXhosa";


let theGreetInMap: Map<language, GreetIn> = new Map()

//Map object for Xhosa

theGreetInMap.set(language.xhosa, new GreetInXhosa());

//Get the Xhosa greeting
let greeting = theGreetInMap.get(language.xhosa);
console.log(greeting.greet('Lindani'));

// the Greeter class

export class Greeter {
    //A map that has a languages enum as a key and a GreetIn interface instance as a value
    private greetLanguages: Map<language, GreetIn>;
    constructor(greetLanguages: Map<language, GreetIn>) {
        this.greetLanguages = greetLanguages;
    }

    greet(name: string, chosenLanguage: language) {
        let greetIn = this.greetLanguages.get(chosenLanguage)
        if (greetIn) {
            return greetIn.greet(name)
        }
        return ""
    }
}