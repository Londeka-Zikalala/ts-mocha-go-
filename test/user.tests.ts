import greet from "../greet";
import assert from "assert";

describe('The greet function', function () {
    it('should greet a user with an email provided', function () {
        assert.equal("Hello, Bob Crow we will be in touch at: bob@crow.com", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: "bob@crow.com"
        }))
    })

    it('should greet a user wothout an email provided', function () {
        assert.equal("Hello, Bob Crow we can't contact you.", greet({
            firstname: "Bob",
            lastname: "Crow",
            email: ""
        }))
    })
})