function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  return (passwordAttempt) => {
    // If the account is already locked
    if (isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    // If password is correct
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Password is incorrect → increment counter
    attemptCount++;

    // Return failed attempt message
    const message = `Attempt ${attemptCount}: Login failed`;

    // Lock account **after** the 3rd failed attempt
    if (attemptCount >= 3) {
      isLocked = true;
    }

    return message;
  };
}

module.exports = { createLoginTracker };

   

    
