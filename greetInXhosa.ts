import GreetIn from "./greetin";
class GreetInXhosa implements GreetIn {
    greet(name: string) {
      return "Molo, " + name;
    }
  }
  
  export { GreetInXhosa };