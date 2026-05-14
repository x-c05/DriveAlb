// ===============================
// DriveAlb Authentication Logic
// Based on the original DoMakina authentication idea,
// rewritten for HTML, CSS, and Vanilla JavaScript.
// ===============================

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authMessage = document.getElementById("authMessage");

// Demo users for frontend-only testing.
// Later, these will come from the backend database.
const demoUsers = [
  {
    email: "client@drivealb.com",
    password: "client123",
    role: "client",
    redirect: "listings.html"
  },
  {
    email: "seller@drivealb.com",
    password: "seller123",
    role: "seller",
    redirect: "seller-dashboard.html"
  },
  {
    email: "staff@drivealb.com",
    password: "staff123",
    role: "staff",
    redirect: "admin-dashboard.html"
  },
  {
    email: "admin@drivealb.com",
    password: "admin123",
    role: "admin",
    redirect: "admin-dashboard.html"
  }
];

function showMessage(message, type = "error") {
  if (!authMessage) return;

  authMessage.textContent = message;

  if (type === "success") {
    authMessage.style.color = "green";
  } else {
    authMessage.style.color = "#d51f2a";
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveSession(user) {
  const sessionUser = {
    email: user.email,
    role: user.role,
    loggedInAt: new Date().toISOString()
  };

  localStorage.setItem("drivealbUser", JSON.stringify(sessionUser));
}

function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem("drivealbRegisteredUsers")) || [];
}

function saveRegisteredUsers(users) {
  localStorage.setItem("drivealbRegisteredUsers", JSON.stringify(users));
}

// ===============================
// Login Form
// ===============================

if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      showMessage("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.");
      return;
    }

    const registeredUsers = getRegisteredUsers();

    const user =
      demoUsers.find(
        item => item.email === email && item.password === password
      ) ||
      registeredUsers.find(
        item => item.email === email && item.password === password
      );

    if (!user) {
      showMessage("Invalid email or password.");
      return;
    }

    saveSession(user);

    showMessage("Login successful. Redirecting...", "success");

    setTimeout(() => {
      if (user.role === "client") {
        window.location.href = "listings.html";
      } else if (user.role === "seller") {
        window.location.href = "seller-dashboard.html";
      } else if (user.role === "staff" || user.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "../index.html";
      }
    }, 800);
  });
}

// ===============================
// Register Form
// ===============================

if (registerForm) {
  registerForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value.toLowerCase();

    if (!name || !email || !password || !role) {
      showMessage("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      showMessage("Password must be at least 6 characters long.");
      return;
    }

    const registeredUsers = getRegisteredUsers();

    const emailExists =
      demoUsers.some(user => user.email === email) ||
      registeredUsers.some(user => user.email === email);

    if (emailExists) {
      showMessage("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
      status: "Active",
      createdAt: new Date().toISOString()
    };

    registeredUsers.push(newUser);
    saveRegisteredUsers(registeredUsers);

    showMessage("Account created successfully. Redirecting to login...", "success");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 900);
  });
}

// ===============================
// Helper: Logout
// Can be used later in dashboards.
// ===============================

function logout() {
  localStorage.removeItem("drivealbUser");
  window.location.href = "login.html";
}

// ===============================
// Helper: Current User
// Can be used later for protected pages.
// ===============================

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("drivealbUser"));
}