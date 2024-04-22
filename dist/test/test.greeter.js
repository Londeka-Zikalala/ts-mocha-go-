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
const GreetInXhosa_1 = __importDefault(require("../GreetInXhosa"));
const GreetInFrench_1 = __importDefault(require("../GreetInFrench"));
const GreetInAfrikaans_1 = __importDefault(require("../GreetInAfrikaans"));
const greeter_1 = __importDefault(require("../greeter"));
const assert_1 = __importDefault(require("assert"));
const Language_1 = require("../Language");
const GreetInManager_1 = __importDefault(require("../GreetInManager"));
const UserGreetCounterImplementation_1 = __importDefault(require("../UserGreetCounterImplementation"));
describe('The Greeter function', function () {
    it('should greet a user in French, Xhosa and Afrikaans', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const greetLanguages = new Map();
            yield greetLanguages.set(Language_1.Language.french, new GreetInFrench_1.default());
            yield greetLanguages.set(Language_1.Language.xhosa, new GreetInXhosa_1.default());
            yield greetLanguages.set(Language_1.Language.afr, new GreetInAfrikaans_1.default());
            const greetManager = new GreetInManager_1.default(greetLanguages);
            const mapUserGreetCounter = new UserGreetCounterImplementation_1.default();
            const greeter = new greeter_1.default(greetManager, mapUserGreetCounter);
            let result1 = yield greeter.greet("Bob", Language_1.Language.french);
            let result2 = yield greeter.greet("Bob", Language_1.Language.xhosa);
            let result3 = yield greeter.greet("Bob", Language_1.Language.afr);
            assert_1.default.equal(result1, 'Bonjour, Bob');
            assert_1.default.equal(result2, 'Molo, Bob');
            assert_1.default.equal(result3, 'Hallo, Bob');
        });
    });
    it('should return an empty string when a Language is not recognised', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const greetLanguages = new Map();
            yield greetLanguages.set(Language_1.Language.french, new GreetInFrench_1.default());
            yield greetLanguages.set(Language_1.Language.xhosa, new GreetInXhosa_1.default());
            yield greetLanguages.set(Language_1.Language.afr, new GreetInAfrikaans_1.default());
            const greetManager = new GreetInManager_1.default(greetLanguages);
            const mapUserGreetCounter = new UserGreetCounterImplementation_1.default();
            const greeter = new greeter_1.default(greetManager, mapUserGreetCounter);
            let result1 = yield greeter.greet("Bob", Language_1.Language.frnch);
            let result2 = yield greeter.greet("Bob", Language_1.Language.xsa);
            let result3 = yield greeter.greet("Bob", Language_1.Language.af);
            assert_1.default.equal(result1, '');
            assert_1.default.equal(result2, '');
            assert_1.default.equal(result3, '');
        });
    });
    it('should count the number of greeted users', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const greetLanguages = new Map();
            yield greetLanguages.set(Language_1.Language.french, new GreetInFrench_1.default());
            yield greetLanguages.set(Language_1.Language.xhosa, new GreetInXhosa_1.default());
            yield greetLanguages.set(Language_1.Language.afr, new GreetInAfrikaans_1.default());
            const greetManager = new GreetInManager_1.default(greetLanguages);
            const mapUserGreetCounter = new UserGreetCounterImplementation_1.default();
            const greeter = new greeter_1.default(greetManager, mapUserGreetCounter);
            yield greeter.greet("Bob", Language_1.Language.french);
            yield greeter.greet("Londeka", Language_1.Language.xhosa);
            yield greeter.greet("Andre", Language_1.Language.xhosa);
            let result = yield greeter.getGreetCounter();
            assert_1.default.equal(result, 3);
        });
    });
    it('should increment the counter if a user greets multiple times', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let greetLanguages = new Map();
            yield greetLanguages.set(Language_1.Language.french, new GreetInFrench_1.default());
            yield greetLanguages.set(Language_1.Language.xhosa, new GreetInXhosa_1.default());
            yield greetLanguages.set(Language_1.Language.afr, new GreetInAfrikaans_1.default());
            const greetManager = new GreetInManager_1.default(greetLanguages);
            const mapUserGreetCounter = new UserGreetCounterImplementation_1.default();
            const greeter = new greeter_1.default(greetManager, mapUserGreetCounter);
            yield greeter.greet("Bob", Language_1.Language.french);
            yield greeter.greet("Londeka", Language_1.Language.xhosa);
            yield greeter.greet("Londeka", Language_1.Language.afr);
            let result = yield greeter.getGreetCounter();
            assert_1.default.equal(result, 2);
        });
    });
});
