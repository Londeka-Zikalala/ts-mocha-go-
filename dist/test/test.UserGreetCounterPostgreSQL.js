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
const UserGreetCounterPostgreSQL_1 = __importDefault(require("../UserGreetCounterPostgreSQL"));
const assert_1 = __importDefault(require("assert"));
const db_1 = __importDefault(require("../db"));
describe('UserGreetCounterSQL', function () {
    let counter;
    this.timeout(10000);
    // before(function () {
    //     return __awaiter(this, void 0, void 0, function* () {
    //         // Connect to the database before running tests
    //         yield db_1.default.connect();
    //     });
    // });
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            // Clear table
            yield db_1.default.none(`TRUNCATE TABLE user_greet_counts RESTART IDENTITY CASCADE`);
            // Reset the counter before each test
            counter = new UserGreetCounterPostgreSQL_1.default(db_1.default);
        });
    });
    it('should increment greet count for a new user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield counter.countGreet('Andre');
            yield counter.countGreet('Londeka');
            yield counter.countGreet('Londeka');
            yield counter.countGreet('Thandeka');
            const greetCount = yield counter.greetCounter();
            assert_1.default.equal(greetCount, 3);
        });
    });
    it('should increment greet count for an existing user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield counter.countGreet('John');
            yield counter.countGreet('John');
            const greetCount = yield counter.userGreetCount('John');
            assert_1.default.equal(greetCount, 2);
        });
    });
    it('should return total greet count', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield counter.countGreet('Londeka');
            yield counter.countGreet('Andre');
            const totalGreetCount = yield counter.greetCounter();
            assert_1.default.equal(totalGreetCount, 2);
        });
    });
    it('should return greet count for a specific user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield counter.countGreet('Londeka');
            yield counter.countGreet('Londeka');
            yield counter.countGreet('Andre');
            const greetCount1 = yield counter.userGreetCount('Londeka');
            const greetCount2 = yield counter.userGreetCount('Andre');
            assert_1.default.equal(greetCount1, 2);
            assert_1.default.equal(greetCount2, 1);
        });
    });
    it('should return 0 greet count for non-existing user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield counter.countGreet('Londeka');
            const greetCount = yield counter.userGreetCount('Thando');
            assert_1.default.equal(greetCount, 0);
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
