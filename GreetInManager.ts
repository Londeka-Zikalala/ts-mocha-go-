import Greetable from "./greetable";
import GreetIn from "./Greetin";
import { Language } from "./Language";

export default class GreetInManager implements Greetable {
    constructor(private greetLanguages: Map<Language, GreetIn>) {
        this.greetLanguages = greetLanguages;
    }

    greet(firstName: string, chosenLanguage: Language): Promise<string> {
        return new Promise<string>((resolve) => {
            const greetIn = this.greetLanguages.get(chosenLanguage);
            if (greetIn) {
                resolve(greetIn.greet(firstName));
            } else {
                resolve("");
            }
        });
    }
}
