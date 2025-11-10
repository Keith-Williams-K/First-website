
// ----------------------------
// ADMIN LOGIN VALIDATION
// ----------------------------
const adminLoginBtn = document.getElementById("adminLoginBtn");

if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", () => {
        const email = document.getElementById("adminEmail").value.trim();
        const password = document.getElementById("adminPassword").value.trim();

        // Dummy admin account
        const adminEmail = "admin@screamtech.com";
        const adminPassword = "admin123";

        if (email === adminEmail && password === adminPassword) {
            alert("Welcome Admin ✅");
            window.location.href = "admin_panel.html";  // new page
        } else {
            alert("Incorrect admin email or password ❌");
        }
    });
}


// ----------------------------
// SIGNUP VALIDATION
// ----------------------------
const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
    signupBtn.addEventListener("click", () => {

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const confirm = document.getElementById("confirmPassword").value.trim();

        if (!name || !email || !password || !confirm) {
            alert("Please fill in all fields!");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        alert("Account created successfully ✅");
        window.location.href = "index.html"; // send user back to login
    });
}
