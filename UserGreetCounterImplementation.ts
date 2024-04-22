import UserGreetCounter from "./UserGreetCounter";
export default class MapUserGreetCounter implements UserGreetCounter {
    private theGreetedUsers: Map<string, number>;

    constructor() {
        this.theGreetedUsers = new Map<string, number>();
    }

    async countGreet(firstName: string): Promise<void> {
        if (this.theGreetedUsers.has(firstName)) {
            const count = this.theGreetedUsers.get(firstName) || 0;
            this.theGreetedUsers.set(firstName, count + 1);
        } else {
            this.theGreetedUsers.set(firstName, 1);
        }
    }

    async greetCounter(): Promise<number> {
        return this.theGreetedUsers.size;
    }

    async userGreetCount(firstName: string): Promise<number> {
        return this.theGreetedUsers.get(firstName) || 0;
    }
}