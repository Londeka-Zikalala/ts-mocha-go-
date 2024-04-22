"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GreetInXhosa_1 = __importDefault(require("../GreetInXhosa"));
const assert_1 = __importDefault(require("assert"));
describe('The greetInXhosa function', function () {
    it('should greet a user in Xhosa', function () {
        const greeter = new GreetInXhosa_1.default();
        const greeting = greeter.greet('Bob');
        assert_1.default.equal(greeting, 'Molo, Bob');
    });
});
