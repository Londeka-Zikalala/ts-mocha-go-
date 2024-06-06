import Greetable from "./greetable";
import GreetIn from "./Greetin";
import { Language } from "./Language";

// Export a default class named GreetInManager that implements the Greetable interface
export default class GreetInManager implements Greetable {
    // Declare a constructor that takes a Map of languages to GreetIn implementations
    constructor(private greetLanguages: Map<Language, GreetIn>) {
        // Initialize the greetLanguages map
        this.greetLanguages = greetLanguages;
    }

    // Implement the greet method from the Greetable interface
    greet(firstName: string, chosenLanguage: Language): Promise<string> {
        // Return a Promise that resolves to a string
        return new Promise<string>((resolve) => {
            // Get the GreetIn implementation for the chosen language
            const greetIn = this.greetLanguages.get(chosenLanguage);
            // If a GreetIn implementation is found
            if (greetIn) {
                // Resolve the Promise with the greeting message
                resolve(greetIn.greet(firstName));
            } else {
                // If no GreetIn implementation is found, resolve the Promise with an empty string
                resolve("");
            }
        });
    }
}
