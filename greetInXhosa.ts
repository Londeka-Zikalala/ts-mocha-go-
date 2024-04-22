import GreetIn from "./Greetin";
export default class GreetInXhosa implements GreetIn {
    greet(name: string) {
      return "Molo, " + name;
    }
  }
  
