"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GreetInManager {
    constructor(greetLanguages) {
        this.greetLanguages = greetLanguages;
        this.greetLanguages = greetLanguages;
    }
    greet(firstName, chosenLanguage) {
        return new Promise((resolve) => {
            const greetIn = this.greetLanguages.get(chosenLanguage);
            if (greetIn) {
                resolve(greetIn.greet(firstName));
            }
            else {
                resolve("");
            }
        });
    }
}
exports.default = GreetInManager;
