// Q2: Student Form Validator

function validateStudentForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^[0-9]{10}$/;
    let passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/;

    validateField(name, nameRegex, "Name must contain alphabets only");
    validateField(email, emailRegex, "Invalid email format");
    validateField(phone, phoneRegex, "Phone must be 10 digits");
    validateField(password, passRegex, "Password must contain uppercase, number & special char");
}

function validateField(field, regex, message) {
    let error = field.nextElementSibling;

    if (!regex.test(field.value)) {
        field.style.border = "2px solid red";
        error.textContent = message;
    } else {
        field.style.border = "2px solid green";
        error.textContent = "";
    }
}
