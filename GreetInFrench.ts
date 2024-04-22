import GreetIn from "./Greetin";
export default class GreetInFrench implements GreetIn {
    greet(name: string) {
      return "Bonjour, " + name;
    }
  }
  
