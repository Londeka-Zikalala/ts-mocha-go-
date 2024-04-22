"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("../greet"));
const assert_1 = __importDefault(require("assert"));
const Language_1 = require("../Language");
describe('The greet function', function () {
    it('should greet a user in Xhosa with an email provided', function () {
        assert_1.default.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language_1.Language.xhosa));
    });
    it('should greet a user in Xhosa with an email provided', function () {
        assert_1.default.equal("Hallo, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language_1.Language.afr));
    });
    it('should greet a user in Xhosa with an email provided', function () {
        assert_1.default.equal("Bonjour, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language_1.Language.french));
    });
    it('should greet a user in Xhosa without an email provided', function () {
        assert_1.default.equal("Molo, Bob Crow, we can't contact you.", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: ""
        }, Language_1.Language.xhosa));
    });
    it('should greet a user in Xhosa when language is not recognised', function () {
        assert_1.default.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", (0, greet_1.default)({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language_1.Language.xhoa));
    });
});
