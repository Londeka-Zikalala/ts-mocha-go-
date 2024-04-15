import GreetIn from "./greetin";
export default class GreetInAfrikaans implements GreetIn {
    greet(name: string) {
      return "Hallo, " + name;
    }
  }
  
