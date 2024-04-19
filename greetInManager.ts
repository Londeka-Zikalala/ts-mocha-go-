import Greetable from "./greetable";
import GreetIn from "./greetin";
import { language } from "./language";

export default class GreetInManager implements Greetable {
    constructor(private greetLanguages: Map<language, GreetIn>) {
        this.greetLanguages = greetLanguages;
    }

    greet(firstName: string, chosenLanguage: language): Promise<string> {
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
