import Person from "./person";
import { Language } from "./Language";
import GreetIn from "./Greetin";
import GreetInXhosa from "./GreetInXhosa";
import GreetInFrench from "./GreetInFrench";
import GreetInAfrikaans from "./GreetInAfrikaans";

// Export a default function named greet
export default function greet(person: Person, chosenLanguage: Language) {
    // Declare a variable greetIn of type GreetIn
    let greetIn: GreetIn;

    // Use an if-else statement to determine which language to use
    if (chosenLanguage === Language.french) {
        // If the chosen language is French, create a new instance of GreetInFrench
        greetIn = new GreetInFrench();
    } else if (chosenLanguage === Language.afr) {
        // If the chosen language is Afrikaans, create a new instance of GreetInAfrikaans
        greetIn = new GreetInAfrikaans();
    } else {
        // If the chosen language is Xhosa, create a new instance of GreetInXhosa
        greetIn = new GreetInXhosa();
    }

    // Check if the person has an email address
    if (person.email) {
        // If they do, return a greeting message including their email address
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we will be in touch at: ${person.email}`;
    } else {
        // If they don't, return a greeting message without their email address
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we can't contact you.`;
    }
}