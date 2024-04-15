import GreetIn from "./greetin";
export default class GreetInFrench implements GreetIn {
    greet(name: string) {
      return "Bonjour, " + name;
    }
  }
  
