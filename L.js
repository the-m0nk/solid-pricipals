// Liskov Substitution Example

//  Subtypes must be substitutable for their base types without altering the correctness of the program.

// Base class
class Bird {
    fly() {
        console.log("Bird is flying.");
    }
}

// Derived class
class Sparrow extends Bird {
    fly() {
        console.log("Sparrow is flying.");
    }
}

// Usage example
function letBirdFly(bird) {
    bird.fly();
}

const sparrow = new Sparrow();
letBirdFly(sparrow);  // Output: Sparrow is flying.

// Code where LSP voilets
class Bird {
    fly() {
        console.log("Bird is flying.");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins cannot fly.");
    }
}

// Usage example
function letBirdFly(bird) {
    bird.fly();
}

const penguin = new Penguin();
letBirdFly(penguin);  // Throws an error: Penguins cannot fly.

