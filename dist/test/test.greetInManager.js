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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Language_1 = require("../Language");
const GreetInManager_1 = __importDefault(require("../GreetInManager"));
const GreetInXhosa_1 = __importDefault(require("../GreetInXhosa"));
const GreetInFrench_1 = __importDefault(require("../GreetInFrench"));
const GreetInAfrikaans_1 = __importDefault(require("../GreetInAfrikaans"));
describe('GreetInManager', function () {
    it('should greet a user in a chosen Language', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const greetLanguages = new Map();
            greetLanguages.set(Language_1.Language.french, new GreetInFrench_1.default());
            greetLanguages.set(Language_1.Language.xhosa, new GreetInXhosa_1.default());
            const greetManager = new GreetInManager_1.default(greetLanguages);
            const greetMessage = yield greetManager.greet('Bob', Language_1.Language.french);
            assert_1.default.strictEqual(greetMessage, 'Bonjour, Bob');
        });
    });
    it('should return an empty string if the chosen Language is not available', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const greetLanguages = new Map();
            greetLanguages.set(Language_1.Language.french, new GreetInFrench_1.default());
            greetLanguages.set(Language_1.Language.afr, new GreetInAfrikaans_1.default());
            const greetManager = new GreetInManager_1.default(greetLanguages);
            const greetMessage = yield greetManager.greet('Bob', Language_1.Language.af);
            assert_1.default.strictEqual(greetMessage, '');
        });
    });
});
