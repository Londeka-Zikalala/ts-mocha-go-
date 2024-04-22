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
const UserGreetCounterImplementation_1 = __importDefault(require("../UserGreetCounterImplementation"));
const assert_1 = __importDefault(require("assert"));
describe('The MapUsergreetingsCounter class', function () {
    it("should count the number of greeted people", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let greetingsCounter = new UserGreetCounterImplementation_1.default();
            yield greetingsCounter.countGreet("Londeka");
            yield greetingsCounter.countGreet("Thando");
            yield greetingsCounter.countGreet("Londeka");
            let result = yield greetingsCounter.greetCounter();
            assert_1.default.equal(result, 2);
        });
    });
    it("should return the greet count for a specific user", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let greetingsCounter = new UserGreetCounterImplementation_1.default();
            yield greetingsCounter.countGreet("Londeka");
            yield greetingsCounter.countGreet("Thando");
            yield greetingsCounter.countGreet("Londeka");
            let result1 = yield greetingsCounter.userGreetCount("Londeka");
            let result2 = yield greetingsCounter.userGreetCount("Thando");
            assert_1.default.equal(result1, 2);
            assert_1.default.equal(result2, 1);
        });
    });
    it("should return 0 for the greet count for a user not greeted", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let greetingsCounter = new UserGreetCounterImplementation_1.default();
            let result = yield greetingsCounter.userGreetCount("Andre");
            assert_1.default.equal(result, 0);
        });
    });
});
