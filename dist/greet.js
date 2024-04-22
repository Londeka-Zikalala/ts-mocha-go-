"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Language_1 = require("./Language");
const GreetInXhosa_1 = __importDefault(require("./GreetInXhosa"));
const GreetInFrench_1 = __importDefault(require("./GreetInFrench"));
const GreetInAfrikaans_1 = __importDefault(require("./GreetInAfrikaans"));
function greet(person, chosenLanguage) {
    let greetIn;
    if (chosenLanguage === Language_1.Language.french) {
        greetIn = new GreetInFrench_1.default();
    }
    else if (chosenLanguage === Language_1.Language.afr) {
        greetIn = new GreetInAfrikaans_1.default();
    }
    else {
        greetIn = new GreetInXhosa_1.default();
    }
    if (person.email) {
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we will be in touch at: ${person.email}`;
    }
    else {
        return `${greetIn.greet(person.firstname)} ${person.lastname}, we can't contact you.`;
    }
}
exports.default = greet;
