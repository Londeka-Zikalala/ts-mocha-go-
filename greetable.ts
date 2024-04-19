import { language } from './language';

export default interface Greetable {
    greet(firstName: string, language: language):Promise<string>
}