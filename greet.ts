import Person from "./person";
import { language } from "./language";
import GreetIn from "./greetin";
import { GreetInXhosa } from "./greetInXhosa";
import { GreetInFrench } from "./greetInFrench";
import { GreetInAfrikaans } from "./greetInAfrikaans";

export default function greet(person: Person, chosenLanguage: language) {
    let greetIn: GreetIn;

    if (chosenLanguage === language.french) {
        greetIn = new GreetInFrench();
    } else if (chosenLanguage === language.afr) {
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