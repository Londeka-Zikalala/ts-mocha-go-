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
class MapUserGreetCounter {
    constructor() {
        this.theGreetedUsers = new Map();
    }
    countGreet(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.theGreetedUsers.has(firstName)) {
                const count = this.theGreetedUsers.get(firstName) || 0;
                this.theGreetedUsers.set(firstName, count + 1);
            }
            else {
                this.theGreetedUsers.set(firstName, 1);
            }
        });
    }
    greetCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.theGreetedUsers.size;
        });
    }
    userGreetCount(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.theGreetedUsers.get(firstName) || 0;
        });
    }
}
exports.default = MapUserGreetCounter;
