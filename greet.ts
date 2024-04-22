import Person from "./person";
import { Language } from "./Language";
import GreetIn from "./Greetin";
import GreetInXhosa from "./GreetInXhosa";
import GreetInFrench from "./GreetInFrench";
import GreetInAfrikaans from "./GreetInAfrikaans";

export default function greet(person: Person, chosenLanguage: Language) {
    let greetIn: GreetIn;

    if (chosenLanguage === Language.french) {
        greetIn = new GreetInFrench();
    } else if (chosenLanguage === Language.afr) {
        greetIn = new GreetInAfrikaans();
    } else {
        greetIn = new GreetInXhosa();
    }

    if (person.email) {
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we will be in touch at: ${person.email}`;
    } else {
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we can't contact you.`;
    }
}