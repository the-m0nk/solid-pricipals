// Interface Segregation Principle 
// Definition: Clients should not be forced to depend on interfaces they do not use. It’s better to have several small, specific interfaces than a large, general-purpose one.
// Specific interfaces
class UserCreation {
    createUser() {
        console.log("Creating user.");
    }
}

class UserDeletion {
    deleteUser() {
        console.log("Deleting user.");
    }
}

class UserRetrieval {
    getUser() {
        console.log("Retrieving user.");
    }
}

// Usage example
const userCreation = new UserCreation();
userCreation.createUser();

const userDeletion = new UserDeletion();
userDeletion.deleteUser();

const userRetrieval = new UserRetrieval();
userRetrieval.getUser();

// Code where ISP voilets

class UserManagement {
    createUser() {
        console.log("Creating user.");
    }

    deleteUser() {
        console.log("Deleting user.");
    }

    getUser() {
        console.log("Retrieving user.");
    }
}

// Usage example
const userManagement = new UserManagement();
userManagement.createUser();
userManagement.deleteUser();
userManagement.getUser();

