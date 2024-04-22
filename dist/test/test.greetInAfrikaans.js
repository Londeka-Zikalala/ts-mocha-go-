"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GreetInAfrikaans_1 = __importDefault(require("../GreetInAfrikaans"));
const assert_1 = __importDefault(require("assert"));
describe('The greetInAfrikaans function', function () {
    it('should greet a user in Afrikaans', function () {
        const greeter = new GreetInAfrikaans_1.default();
        const greeting = greeter.greet('Bob');
        assert_1.default.equal(greeting, 'Hallo, Bob');
    });
});
