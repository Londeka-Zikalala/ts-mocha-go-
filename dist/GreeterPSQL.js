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
const Language_1 = require("./Language");
class GreeterPSQL {
    constructor(db) {
        this.db = db;
    }
    greet(firstName, language) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user exists
                let user = yield this.db.oneOrNone('SELECT * FROM Users WHERE firstname = $1', [firstName]);
                // If the user does not exist, insert the user into the Users table
                if (!user) {
                    yield this.db.none('INSERT INTO Users (firstname) VALUES ($1)', [firstName]);
                    // Fetch the user
                    user = yield this.db.oneOrNone('SELECT * FROM Users WHERE firstname = $1', [firstName]);
                }
                // Fetch the phrase for the specified language
                const chosenLanguage = yield this.db.oneOrNone('SELECT phrase FROM LanguagePhrases WHERE language = $1', [Language_1.Language[language]]);
                // If language not found,
                if (!chosenLanguage) {
                    throw new Error('Language not found');
                }
                // Concatenate the fetched name with the fetched phrase
                const greeting = `${chosenLanguage.phrase}, ${firstName}`;
                // Return the greeting
                return greeting;
            }
            catch (error) {
                throw new Error('Error fetching greeting');
            }
        });
    }
}
exports.default = GreeterPSQL;
