/* 
3-Assume that we implement the part of checking that user has specific role or not.
If the user has the specifid role the function return true else return false.

Each user has array of roles and we want to implement the logic so that the user roles array may maximized or minimized .


Implement the previous part using SOLID principle
Assume any missing data
*/

class User {
  constructor(username) {
    this.username = username;
  }
  hasRole(role) {
    if (this.roles.includes(role)) {
      return true;
    } else {
      return false;
    }
  }
}

class Author extends User {
  constructor(username) {
    super(username);
    this.roles = ["Author"];
  }
}

class Admin extends User {
  constructor(username) {
    super(username);
    this.roles = ["Author", "Admin"];
  }
}

// Testing
const author1 = new Author("th");
const admin1 = new Admin("dm");

console.log(author1.hasRole("Author"));
console.log(author1.hasRole("Admin"));
console.log(admin1.hasRole("Admin"));
