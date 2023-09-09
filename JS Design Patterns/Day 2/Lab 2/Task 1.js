/*
1-Suppose the following part of module of auth service

-The auth module is responsible for authenticate incoming requests and validate the user credentials and also token.
-The auth module implemented in more than one part one to manage requests from user and the other is to mange checking credintials with database.

Implement the previous part using SOLID principle
Assume any missing data.
*/

const users = [];

const helpers = {
  matchPasswordUsernameAndPassword: (username, pass) => {
    const currentUser = users.filter((user) => user.username === username);
    if (currentUser.length > 0 && currentUser[0].password === pass) {
      return true;
    } else {
      return false;
    }
  },
  getUserToken: () => {
    return "token123";
  },
};

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.addUserToDB();
  }
  addUserToDB() {
    users.push(this);
  }
}

class Auth {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  authenticated() {
    if (
      helpers.matchPasswordUsernameAndPassword(this.username, this.password)
    ) {
      return true;
    } else {
      return false;
    }
  }
  authorized(token) {
    if (this.authenticated() && token === helpers.getUserToken()) {
      return true;
    } else {
      return false;
    }
  }
}

// Signup
const u1 = new User("mo", "123");
const u2 = new User("abdo", "000");

console.log(users);

// Authentication test
const auth1 = new Auth("mo", "123");
const auth2 = new Auth("abdo", "123");

console.log("Test 1: should succeed ----------");
if (auth1.authenticated()) {
  console.log(`User ${auth1.username} is authenticated successfully!`);
} else {
  console.log(`Error: check username and password and try again!`);
}

console.log("Test 2: should fail ----------");
if (auth2.authenticated()) {
  console.log(`User ${auth1.username} is authenticated successfully!`);
} else {
  console.log(`Error: check username and password and try again!`);
}

// Autherization test
console.log("Test 3: should succeed ----------");
if (auth1.authorized("token123")) {
  console.log(`User ${auth1.username} can perform the action!`);
} else {
  console.log(`Error: user is not either un-authenticated or invalid token!`);
}
if (auth1.authorized("token123ff")) {
  console.log(`User ${auth1.username} can perform the action!`);
} else {
  console.log(`Error: user is not either un-authenticated or invalid token!`);
}

console.log("Test 4: should fail ----------");
if (auth2.authorized("token123")) {
  console.log(`User ${auth1.username} can perform the action!`);
} else {
  console.log(`Error: user is not either un-authenticated or invalid token!`);
}
