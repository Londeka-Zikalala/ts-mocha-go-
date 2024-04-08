import Person from "./person";

export default function greet(person: Person) {
    if (person.email) {
        return `Hello, ${person.firstname} ${person.lastname} we will be in touch at: ${person.email}`;
    }
    else {
        return `Hello, ${person.firstname} ${person.lastname} we can't contact you.`;

    }
};