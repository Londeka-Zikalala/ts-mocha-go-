import greet from "../greet";
import {GreetInXhosa} from "../greetInXhosa";
import { GreetInFrench } from "../greetInFrench";
import { GreetInAfrikaans } from "../greetInAfrikaans";
import { Greeter } from "../greeter";
import GreetIn from "../greetin";
import assert from "assert";
import { language } from "../language";


////TESTS FOR THE GREET FUNCTION

describe('The greet function', function () {
    it('should greet a user in Xhosa with an email provided', function () {
        assert.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language.xhosa ))
    })
    it('should greet a user in Xhosa with an email provided', function () {
        assert.equal("Hallo, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language.afr ))
    })
    it('should greet a user in Xhosa with an email provided', function () {
        assert.equal("Bonjour, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language.french ))
    })

    it('should greet a user in Xhosa without an email provided', function () {
        assert.equal("Molo, Bob Crow, we can't contact you.", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: ""
        }, language.xhosa))
    })

    it('should greet a user in Xhosa when language is not recognised', function () {
        assert.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, language.xhoa ))
    })
})

////TEST FOR THE GREETINXHOSA IMPLEMENTATION
describe('The greetInXhosa function', function () {
    it('should greet a user in Xhosa', function () {
        const greeter = new GreetInXhosa();
        const greeting = greeter.greet('Bob'); 
        assert.equal(greeting, 'Molo, Bob');
    })
});


////TEST FOR THE GREETINAFRIKAANS IMPLEMENTATION

describe('The greetInAfrikaans function', function () {
    it('should greet a user in Afrikaans', function () {
        const greeter = new GreetInAfrikaans();
        const greeting = greeter.greet('Bob'); 
        assert.equal(greeting, 'Hallo, Bob');
    })
});

////TEST FOR THE GREETINFRENCH IMPLEMENTATION

describe('The greetInFrench function', function () {
    it('should greet a user in French', function () {
        const greeter = new GreetInFrench();
        const greeting = greeter.greet('Bob'); 
        assert.equal(greeting, 'Bonjour, Bob');
    })
});

/////TESTS FOR THE GREETER CLASSNPM TEST
describe('The Greeter function', function () {
    it('should greet a user in French, Xhosa and Afrikaans', function () {
        let greetMap = new Map<language, GreetIn>();
        greetMap.set(language.french, new GreetInFrench())
        greetMap.set(language.xhosa, new GreetInXhosa())
        greetMap.set(language.afr, new GreetInAfrikaans())

        let greeter = new Greeter(greetMap)
         
        assert.equal(greeter.greet("Bob", language.french), 'Bonjour, Bob');
        assert.equal(greeter.greet("Bob", language.xhosa), 'Molo, Bob');
        assert.equal(greeter.greet("Bob", language.afr), 'Hallo, Bob');
    })

    it('should return an empty string when a language is not recognised', function () {
        let greetMap = new Map<language, GreetIn>();
        greetMap.set(language.french, new GreetInFrench())
        greetMap.set(language.xhosa, new GreetInXhosa())
        let greeter = new Greeter(greetMap)
         
        assert.equal(greeter.greet("Bob", language.frech), '');
        
    })
});