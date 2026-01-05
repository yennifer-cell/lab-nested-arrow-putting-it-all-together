function createLoginTracker(userInfo) {
  // Initialize login attempt counter
  let attemptCount = 0;

  // Inner arrow function (closure)
  return (passwordAttempt) => {
    // Check if account is already locked
    if(attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Increment attempt count
    attemptCount++;

    // Check password
    if(passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      if(attemptCount < 3) {
        return `Login failed. Attempt ${attemptCount} of 3`;
      } else {
        return "Account locked due to too many failed login attempts";
      }
    }
  };
}

const user = {
  username: "shopper123",
  password: "securePass"
};

const login = createLoginTracker(user);

console.log(login("wrong"));      // Login failed. Attempt 1 of 3
console.log(login("incorrect"));  // Login failed. Attempt 2 of 3
console.log(login("badpass"));    // Account locked due to too many failed login attempts
console.log(login("securePass")); // Account locked due to too many failed login attempts


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};
