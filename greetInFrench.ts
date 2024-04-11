import GreetIn from "./greetin";
class GreetInFrench implements GreetIn {
    greet(name: string) {
      return "Bonjour, " + name;
    }
  }
  
  export {GreetInFrench };