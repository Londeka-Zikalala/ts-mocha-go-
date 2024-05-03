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
const GreeterPSQL_1 = __importDefault(require("../GreeterPSQL"));
const Language_1 = require("../Language");
const db_1 = __importDefault(require("../db"));
const assert_1 = __importDefault(require("assert"));
const greeter = new GreeterPSQL_1.default(db_1.default);
describe('GreeterPSQL', function () {
    this.timeout(10000);
    // before(function () {
    //     return __awaiter(this, void 0, void 0, function* () {
    //         // Connect to the database before running tests
    //         yield db_1.default.connect();
    //     });
    // });
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            // Clear existing test data
            yield db_1.default.none(`TRUNCATE TABLE users RESTART IDENTITY CASCADE`);
        });
    });
    it('should greet in the specified language', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const chosenLanguage = Language_1.Language.french;
            const firstName = 'Londeka';
            const result = yield greeter.greet(firstName, chosenLanguage);
            assert_1.default.equal(result, 'Bonjour, Londeka');
        });
    });
    it('should throw an error if language is not found', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const chosenLanguage = Language_1.Language.english;
            const firstName = 'Londeka';
            try {
                yield greeter.greet(firstName, chosenLanguage);
                assert_1.default.fail('Expected an error to be thrown');
            }
            catch (error) {
                assert_1.default.equal(error.message, 'Error fetching greeting');
            }
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Disconnect from the database after running tests
                yield db_1.default.$pool.end();
            }
            catch (error) {
                console.error('Error occurred while closing the database connection:', error);
            }
        });
    });
});
