"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_1 = require("./language");
const greetInXhosa_1 = require("./greetInXhosa");
const greetInFrench_1 = require("./greetInFrench");
const greetInAfrikaans_1 = require("./greetInAfrikaans");
function greet(person, chosenLanguage) {
    let greetIn;
    if (chosenLanguage === language_1.language.french) {
        greetIn = new greetInFrench_1.GreetInFrench();
    }
    else if (chosenLanguage === language_1.language.afr) {
        greetIn = new greetInAfrikaans_1.GreetInAfrikaans();
    }
    else {
        greetIn = new greetInXhosa_1.GreetInXhosa();
    }
    if (person.email) {
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we will be in touch at: ${person.email}`;
    }
    else {
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we can't contact you.`;
    }
}
exports.default = greet;
