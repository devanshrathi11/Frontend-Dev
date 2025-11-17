// Q7: Login Form Validation

function validateLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    let userRegex = /^.{5,}$/;
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    if (!userRegex.test(username.value)) {
        alert("Username must be at least 5 characters");
        return;
    }
    if (!passRegex.test(password.value)) {
        alert("Password must have uppercase, lowercase, number & special char");
        return;
    }

    alert("Login Successful!");
}
