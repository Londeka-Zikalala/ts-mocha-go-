import userGreetCounter from "./userGreetCounter";

export default class MapUserGreetCounter implements userGreetCounter {
    private theGreetedUsers: Map<string, number>;

    constructor() {
        this.theGreetedUsers = new Map<string, number>();
    }

    countGreet(firstName: string): void {
        if (this.theGreetedUsers.has(firstName)) {
            const count = this.theGreetedUsers.get(firstName) || 0;
            this.theGreetedUsers.set(firstName, count + 1);
        } else {
            this.theGreetedUsers.set(firstName, 1);
        }
    }

    get greetCounter(): number {
        return this.theGreetedUsers.size;
    }

    userGreetCount(firstName: string): number {
        return this.theGreetedUsers.get(firstName) || 0;
    }
}