"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
const language_1 = require("./language");
const greetInXhosa_1 = require("./greetInXhosa");
let theGreetInMap = new Map();
//Map object for Xhosa
theGreetInMap.set(language_1.language.xhosa, new greetInXhosa_1.GreetInXhosa());
//Get the Xhosa greeting
let greeting = theGreetInMap.get(language_1.language.xhosa);
console.log(greeting.greet('Lindani'));
// the Greeter class
class Greeter {
    constructor(greetLanguages) {
        this.greetLanguages = greetLanguages;
    }
    greet(name, chosenLanguage) {
        let greetIn = this.greetLanguages.get(chosenLanguage);
        if (greetIn) {
            return greetIn.greet(name);
        }
        return "";
    }
}
exports.Greeter = Greeter;
