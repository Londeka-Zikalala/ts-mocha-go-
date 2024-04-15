import GreetIn from "./greetin";
export default class GreetInXhosa implements GreetIn {
    greet(name: string) {
      return "Molo, " + name;
    }
  }
  
