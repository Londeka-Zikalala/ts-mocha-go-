import GreetIn from "./greetin";
class GreetInAfrikaans implements GreetIn {
    greet(name: string) {
      return "Hallo, " + name;
    }
  }
  
  export {GreetInAfrikaans };