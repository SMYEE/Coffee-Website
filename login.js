// JavaScript source code

// --- LOGIN FORM ---
const loginForm = document.querySelector(".btn-login");
if (loginForm) {
    loginForm.addEventListener("click", function (e) {
        e.preventDefault();
        let valid = true;

        const username = document.getElementById("username");
        const password = document.getElementById("password");

        // Username
        if (username.value.trim() === "") {
            username.classList.add("is-invalid");
            valid = false;
        } else {
            username.classList.remove("is-invalid");
            username.classList.add("is-valid");
        }

        // Password
        if (password.value.trim() === "") {
            password.classList.add("is-invalid");
            valid = false;
        } else {
            password.classList.remove("is-invalid");
            password.classList.add("is-valid");
        }

        if (valid) {
            window.location.href = 'index.html';
        }
    });
}

// --- SIGNUP FORM ---
const signupBtn = document.querySelector(".btn-signup");
if (signupBtn) {
    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let valid = true;

        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const password = document.getElementById("password");
        const birthMonth = document.getElementById("birthMonth");
        const birthDay = document.getElementById("birthDay");
        const agree = document.getElementById("agree");

        // First Name
        if (firstName.value.trim() === "") {
            firstName.classList.add("is-invalid");
            valid = false;
        } else firstName.classList.remove("is-invalid");

        // Last Name
        if (lastName.value.trim() === "") {
            lastName.classList.add("is-invalid");
            valid = false;
        } else lastName.classList.remove("is-invalid");

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("is-invalid");
            valid = false;
        } else email.classList.remove("is-invalid");

        // Phone
        if (phone.value.trim().length < 7) {
            phone.classList.add("is-invalid");
            valid = false;
        } else phone.classList.remove("is-invalid");

        // Password
        if (password.value.trim().length < 6) {
            password.classList.add("is-invalid");
            valid = false;
        } else password.classList.remove("is-invalid");

        // Birth Month
        if (birthMonth.value === "") {
            birthMonth.classList.add("is-invalid");
            valid = false;
        } else birthMonth.classList.remove("is-invalid");

        // Birth Day
        if (birthDay.value === "") {
            birthDay.classList.add("is-invalid"); 
            valid = false;
        } else birthDay.classList.remove("is-invalid"); 

        // Terms
        if (!agree.checked) {
            agree.classList.add("is-invalid");
            valid = false;
        } else agree.classList.remove("is-invalid");

        if (valid) {
            alert("Registration Successful!");
            // window.location.href = "login.html";
        }
    });
}


