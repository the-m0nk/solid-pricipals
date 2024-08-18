// Dependency Inversion Principle Example

// Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
// Abstract interface
class IRepository {
    getUserById(id) {
        throw new Error("Method 'getUserById' must be implemented.");
    }
}

// Concrete implementation
class UserRepository extends IRepository {
    getUserById(id) {
        console.log(`Fetching user with ID: ${id}`);
    }
}

// Service that depends on the abstraction
class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    findUser(id) {
        return this.repository.getUserById(id);
    }
}

// Usage example
const userRepo = new UserRepository();
const userService = new UserService(userRepo);
userService.findUser(1);
