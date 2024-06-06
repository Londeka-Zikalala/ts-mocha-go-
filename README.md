[![Node.js CI](https://github.com/Londeka-Zikalala/ts-mocha-go-/actions/workflows/node.js.yml/badge.svg)](https://github.com/Londeka-Zikalala/ts-mocha-go-/actions/workflows/node.js.yml)

# Typescript and Mocha Setup Practice Project

This project shows how to set up a Typescript project with Mocha support. It follows the steps in [this gist](https://gist.github.com/avermeulen/72598daf29171088689793fc145b999c.).
## Project Overview

### The project includes:
- A Person interface with firstname, lastname, and optional email properties
- A Language enum with three languages: french, afr, and xhosa
- A GreetIn interface with a greet method
- Three classes implementing GreetIn: GreetInFrench, GreetInAfrikaans, and GreetInXhosa
- A Greeter class that takes a Person and a Language as input and returns a greeting message
- A GreeterPSQL class that implements Greetable and fetches greetings from a PostgreSQL database
- A GreetInManager class that manages a map of languages to GreetIn implementations
- Implementing the getGreetCounter and userGreetCount methods in Greeter
- Adding more languages to the Language enum and implementing the corresponding GreetIn classes
- Adding more functionality to the GreeterPSQL class, such as fetching user data from the database
- Tests using Mocha to ensure the code works as expected

### Usage
Run npm test to execute the Mocha tests and see the code.

### Learning Objectives
This project demonstrates:
- How to use interfaces and classes to prevent code repetition
- How to implement dependency injection with the GreetInManager class
- How to use enums to define a set of values
- How to use async/await with Promises
- How to write tests using Mocha to ensure the code works as expected
