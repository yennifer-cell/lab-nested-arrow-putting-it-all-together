function createLoginTracker(userInfo) {
  // Initialize login attempt counter
  let attemptCount = 0;
  let isLocked = false;

  // Inner arrow function to handle login attempts
  return (passwordAttempt) => {
    // If the account is already locked
    if(isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    // Check if password matches
    if(passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Increment attempt count for failed attempt
    attemptCount++;

    // Lock account after 3 failed attempts
    if(attemptCount >= 3) {
      isLocked = true;
      return "Account locked due to too many failed login attempts";
    }

    // Return failed attempt message
    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = { createLoginTracker };



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })

};

