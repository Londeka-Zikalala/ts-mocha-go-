"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    constructor(greetable, userGreetCounter) {
        this.greetable = greetable;
        this.userGreetCounter = userGreetCounter;
    }
    greet(name, chosenLanguage) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the greeting message
            const message = yield this.greetable.greet(name, chosenLanguage);
            // Manage the user count
            yield this.userGreetCounter.countGreet(name);
            return message;
        });
    }
    getGreetCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the total greet count
            return this.userGreetCounter.greetCounter();
        });
    }
    userGreetCount(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the greet count for a specific user
            return this.userGreetCounter.userGreetCount(firstName);
        });
    }
    countGreet(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            // Count the greet for a specific user
            yield this.userGreetCounter.countGreet(firstName);
        });
    }
    greetCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement the greet counter method
            return this.userGreetCounter.greetCounter();
        });
    }
}
exports.default = Greeter;
