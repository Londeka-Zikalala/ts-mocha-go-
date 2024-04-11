"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("../greet"));
const greetInXhosa_1 = require("../greetInXhosa");
const greetInFrench_1 = require("../greetInFrench");
const greetInAfrikaans_1 = require("../greetInAfrikaans");
const greeter_1 = require("../greeter");
const assert_1 = __importDefault(require("assert"));
const language_1 = require("../language");
////TESTS FOR THE GREET FUNCTION
describe('The greet function', function () {
    it('should greet a user in Xhosa with an email provided', function () {
        assert_1.default.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language_1.language.xhosa));
    });
    it('should greet a user in Xhosa with an email provided', function () {
        assert_1.default.equal("Hallo, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language_1.language.afr));
    });
    it('should greet a user in Xhosa with an email provided', function () {
        assert_1.default.equal("Bonjour, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language_1.language.french));
    });
    it('should greet a user in Xhosa without an email provided', function () {
        assert_1.default.equal("Molo, Bob Crow, we can't contact you.", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: ""
        }, language_1.language.xhosa));
    });
    it('should greet a user in Xhosa when language is not recognised', function () {
        assert_1.default.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language_1.language.xhoa));
    });
});
////TEST FOR THE GREETINXHOSA IMPLEMENTATION
describe('The greetInXhosa function', function () {
    it('should greet a user in Xhosa', function () {
        const greeter = new greetInXhosa_1.GreetInXhosa();
        const greeting = greeter.greet('Bob');
        assert_1.default.equal(greeting, 'Molo, Bob');
    });
});
////TEST FOR THE GREETINAFRIKAANS IMPLEMENTATION
describe('The greetInAfrikaans function', function () {
    it('should greet a user in Afrikaans', function () {
        const greeter = new greetInAfrikaans_1.GreetInAfrikaans();
        const greeting = greeter.greet('Bob');
        assert_1.default.equal(greeting, 'Hallo, Bob');
    });
});
////TEST FOR THE GREETINFRENCH IMPLEMENTATION
describe('The greetInFrench function', function () {
    it('should greet a user in French', function () {
        const greeter = new greetInFrench_1.GreetInFrench();
        const greeting = greeter.greet('Bob');
        assert_1.default.equal(greeting, 'Bonjour, Bob');
    });
});
/////TESTS FOR THE GREETER CLASSNPM TEST
describe('The Greeter function', function () {
    it('should greet a user in French, Xhosa and Afrikaans', function () {
        let greetMap = new Map();
        greetMap.set(language_1.language.french, new greetInFrench_1.GreetInFrench());
        greetMap.set(language_1.language.xhosa, new greetInXhosa_1.GreetInXhosa());
        greetMap.set(language_1.language.afr, new greetInAfrikaans_1.GreetInAfrikaans());
        let greeter = new greeter_1.Greeter(greetMap);
        assert_1.default.equal(greeter.greet("Bob", language_1.language.french), 'Bonjour, Bob');
        assert_1.default.equal(greeter.greet("Bob", language_1.language.xhosa), 'Molo, Bob');
        assert_1.default.equal(greeter.greet("Bob", language_1.language.afr), 'Hallo, Bob');
    });
    it('should return an empty string when a language is not recognised', function () {
        let greetMap = new Map();
        greetMap.set(language_1.language.french, new greetInFrench_1.GreetInFrench());
        greetMap.set(language_1.language.xhosa, new greetInXhosa_1.GreetInXhosa());
        let greeter = new greeter_1.Greeter(greetMap);
        assert_1.default.equal(greeter.greet("Bob", language_1.language.frech), '');
    });
});
