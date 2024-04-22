import GreetIn from "./Greetin";
export default class GreetInAfrikaans implements GreetIn {
    greet(name: string) {
      return "Hallo, " + name;
    }
  }
  
