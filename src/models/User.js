// src/models/User.js

class User {
    constructor(username, password, role) {
      this.username = username;
      this.password = password;
      this.role = role;
    }
  
    login() {
      // Logic for logging in, potentially making an API request
      console.log(`${this.username} logged in.`);
    }
  
    logout() {
      // Logic for logging out
      console.log(`${this.username} logged out.`);
    }
  
    changePassword(newPassword) {
      this.password = newPassword;
      console.log('Password changed successfully');
    }
  }
  
  export default User;
  