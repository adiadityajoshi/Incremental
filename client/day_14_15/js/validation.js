function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // EXACT format expected by test
    console.log(
        "Login clicked. Username: " + username + ", Password: " + password
    );
}

function register() {
    
    var name = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    // Mandatory field validation
    if (name === "" || email === "" || username === "" || password === "") {
        alert("All fields are mandatory.");
        return;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Username validation (no special characters)
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        alert("Username should not contain special characters.");
        return;
    }

    // Password validation
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert(
            "Password should be at least 8 characters and must contain at least one capital letter and one numeric."
        );
        return;
    }

    // EXACT format expected by test
    console.log(
        "Register clicked. Name: " +
            name +
            ", Email: " +
            email +
            ", Username: " +
            username +
            ", Password: " +
            password
    );
}

// Required for Jest test environment
if (typeof module !== "undefined") {
    module.exports = { login, register };
}