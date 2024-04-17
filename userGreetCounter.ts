export default interface userGreetCounter{
    countGreet(firstName: string): Promise<void>;
    greetCounter(): Promise<number>;
    userGreetCount(firstName: string): Promise<number>;

}