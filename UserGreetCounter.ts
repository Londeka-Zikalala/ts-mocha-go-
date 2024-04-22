export default interface UserGreetCounter{
    countGreet(firstName: string): Promise<void>;
    greetCounter(): Promise<number>;
    userGreetCount(firstName: string): Promise<number>;

}