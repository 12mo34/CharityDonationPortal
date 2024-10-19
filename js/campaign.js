document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "user" && password === "pass") {

            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
