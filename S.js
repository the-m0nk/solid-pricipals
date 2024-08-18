// SRP Example

///AuthenticationService handles authentication
class AuthenticationService {
    authenticate(user) {
        console.log(`Authenticating user: ${user.username}`);
        // Logic for authentication
    }
}

// UserRepository handles data access
class UserRepository {
    getUserById(id) {
        console.log(`Fetching user with ID: ${id}`);
        // Logic to retrieve user from a database or other source
    }
}

// Code that voilet sigle Responsibilty Principal

// class UserService {
//     authenticate(user) {
//         console.log(`Authenticating user: ${user.username}`);
//         // Logic for authentication
//     }

//     getUserById(id , name) {
//         console.log(`Fetching user with ID: ${id} , ${name}`);
//         // Logic to retrieve user from a database or other source
//     }
// }


// Usage example
const authService = new AuthenticationService();  
// const authService = new UserService();
authService.authenticate({ username: 'john_doe' });

const userRepo = new UserRepository();
// const  userrepo = new UserService()
userRepo.getUserById(1);
