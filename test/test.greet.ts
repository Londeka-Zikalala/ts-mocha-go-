import greet from "../greet";
import assert from "assert";
import { Language } from "../Language";

describe('The greet function', function () {
    it('should greet a user in Xhosa with an email provided', function () {
        assert.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language.xhosa ))
    })
    it('should greet a user in Xhosa with an email provided', function () {
        assert.equal("Hallo, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language.afr ))
    })
    it('should greet a user in Xhosa with an email provided', function () {
        assert.equal("Bonjour, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language.french ))
    })

    it('should greet a user in Xhosa without an email provided', function () {
        assert.equal("Molo, Bob Crow, we can't contact you.", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: ""
        }, Language.xhosa))
    })

    it('should greet a user in Xhosa when language is not recognised', function () {
        assert.equal("Molo, Bob Crow, we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }, Language.xhoa ))
    })
})

