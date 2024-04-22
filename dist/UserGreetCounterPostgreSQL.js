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
class UserGreetCounterSQL {
    constructor(db) {
        this.db = db;
    }
    countGreet(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (firstName) {
                    const user = yield this.db.oneOrNone('SELECT * FROM user_greet_counts WHERE firstname = $1', [firstName]);
                    if (!user) {
                        yield this.db.none(`INSERT INTO  user_greet_counts (firstname, no_of_greets) VALUES ($1, $2)`, [firstName, 1]);
                    }
                    else {
                        yield this.db.none(`UPDATE user_greet_counts SET no_of_greets = no_of_greets + 1 WHERE firstname = $1`, [firstName]);
                    }
                }
            }
            catch (error) {
                console.error('Error updating or inserting users', error);
            }
        });
    }
    greetCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const greetedNames = yield this.db.manyOrNone(`SELECT firstname FROM user_greet_counts`);
                return greetedNames.length;
            }
            catch (error) {
                console.error('Error getting greeted names', error);
                return 0;
            }
        });
    }
    userGreetCount(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.db.oneOrNone(`SELECT * FROM user_greet_counts WHERE firstname = $1`, [firstName]);
                return user ? user.no_of_greets : 0;
            }
            catch (error) {
                console.error('Error fetching user counter', error);
                return 0;
            }
        });
    }
}
exports.default = UserGreetCounterSQL;
