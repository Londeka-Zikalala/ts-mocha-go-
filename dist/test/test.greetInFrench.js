"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GreetInFrench_1 = __importDefault(require("../GreetInFrench"));
const assert_1 = __importDefault(require("assert"));
describe('The greetInFrench function', function () {
    it('should greet a user in French', function () {
        const greeter = new GreetInFrench_1.default();
        const greeting = greeter.greet('Bob');
        assert_1.default.equal(greeting, 'Bonjour, Bob');
    });
});
