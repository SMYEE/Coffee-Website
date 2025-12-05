
///* ------- ELEMENTS ------- */
//    const tabLogin = document.getElementById('tabLogin');
//    const tabSignup = document.getElementById('tabSignup');
//    const loginForm = document.getElementById('loginForm');
//    const signupForm = document.getElementById('signupForm');

//    const loginError = document.getElementById('loginError');
//    const loginSuccess = document.getElementById('loginSuccess');
//    const signupError = document.getElementById('signupError');
//    const signupSuccess = document.getElementById('signupSuccess');

//    /* ------- Toggle functions (no form submission) ------- */
//    function showLoginTab() {
//        tabLogin.classList.add('active');
//    tabSignup.classList.remove('active');
//    loginForm.style.display = 'block';
//    signupForm.style.display = 'none';
//    clearMessages();
//}
//    function showSignupTab() {
//        tabSignup.classList.add('active');
//    tabLogin.classList.remove('active');
//    signupForm.style.display = 'block';
//    loginForm.style.display = 'none';
//    clearMessages();
//}

    //tabLogin.addEventListener('click', showLoginTab);
    //tabSignup.addEventListener('click', showSignupTab);

//    /* ------- Helpers ------- */
//    function clearMessages() {
//        loginError.textContent = '';
//    loginSuccess.style.display = 'none';
//    loginSuccess.textContent = '';
//    signupError.textContent = '';
//    signupSuccess.style.display = 'none';
//    signupSuccess.textContent = '';
//}

//    function isValidEmail(email) {
//  // simple email regex (good for client-side quick checks)
//  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//}

//    /* ------- LOGIN Validation & Submit (prevent default) ------- */
//    loginForm.addEventListener('submit', function (e) {
//        e.preventDefault(); // stop real submit / page reload
//    clearMessages();

//    const email = document.getElementById('loginEmail').value.trim();
//    const password = document.getElementById('loginPassword').value;

//    if (!email || !password) {
//        loginError.textContent = 'Please fill in all fields.';
//    return;
//  }

//    if (!isValidEmail(email)) {
//        loginError.textContent = 'Please enter a valid email address.';
//    return;
//  }

//    if (password.length < 6) {
//        loginError.textContent = 'Password must be at least 6 characters.';
//    return;
//  }

//    // At this point validation passed.
//    // Do not actually submit — in a real app you'd call fetch()/XHR here.
//    loginSuccess.textContent = 'Login successful (demo).';
//    loginSuccess.style.display = 'block';

//    // optional: clear password field for privacy
//    document.getElementById('loginPassword').value = '';
//});

//    /* ------- SIGNUP Validation & Submit (prevent default) ------- */
//    signupForm.addEventListener('submit', function (e) {
//        e.preventDefault();
//    clearMessages();

//    const name = document.getElementById('signupName').value.trim();
//    const email = document.getElementById('signupEmail').value.trim();
//    const password = document.getElementById('signupPassword').value;
//    const confirm = document.getElementById('signupConfirmPassword').value;

//    if (!name || !email || !password || !confirm) {
//        signupError.textContent = 'Please fill in all fields.';
//    return;
//  }

//    if (name.length < 2) {
//        signupError.textContent = 'Please enter a real name.';
//    return;
//  }

//    if (!isValidEmail(email)) {
//        signupError.textContent = 'Please enter a valid email address.';
//    return;
//  }

//    if (password.length < 6) {
//        signupError.textContent = 'Password must be at least 6 characters.';
//    return;
//  }

//    if (password !== confirm) {
//        signupError.textContent = 'Passwords do not match.';
//    return;
//  }

//    // All good: show success (in real app send to backend)
//    signupSuccess.textContent = 'Account created (demo). You can now login.';
//    signupSuccess.style.display = 'block';

//  // Optional: switch to login tab after a short delay
//  setTimeout(() => {
//        // clear signup inputs
//        signupForm.reset();
//    showLoginTab();
//  }, 900);
//});

//    /* ensure page starts at login tab */
//    showLoginTab();


function orderCoffee(name, price, image,desc) {
    const url = `order.html?name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}&desc=${encodeURIComponent(desc) }`;
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
    // for food slide show
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === i);
        });
    }
    // next slide
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });
    //previous slide
    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
    //interval
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);
});