document.addEventListener('DOMContentLoaded', function () {
    let scrolled = false;

    function handleScroll() {
        if (window.scrollY > 40 && !scrolled) {
            document.querySelector('body > nav').classList.add('scrolled');
            scrolled = true;
        } else if (window.scrollY <= 40 && scrolled) {
            document.querySelector('body > nav').classList.remove('scrolled');
            scrolled = false;
        }
    }

    window.addEventListener('scroll', handleScroll);

    const navbarMenu = document.querySelector(".navbar .links");
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const hideMenuBtn = navbarMenu ? navbarMenu.querySelector(".close-btn") : null;
    const showPopupBtn = document.querySelector(".login-btn");
    const formPopup = document.querySelector(".form-popup");
    const hidePopupBtn = formPopup ? formPopup.querySelector(".close-btn") : null;
    const signupLoginLink = formPopup ? formPopup.querySelectorAll(".bottom-link a") : [];

    // Add event listeners only if the elements exist
    if (hamburgerBtn && navbarMenu) {
        hamburgerBtn.addEventListener("click", () => {
            navbarMenu.classList.toggle("show-menu");
        });

        if (hideMenuBtn) {
            hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());
        }
    }

    if (showPopupBtn && formPopup) {
        showPopupBtn.addEventListener("click", () => {
            document.body.classList.toggle("show-popup");
        });

        if (hidePopupBtn) {
            hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
        }

        signupLoginLink.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
            });
        });
    }

    const checkoutForm = document.getElementById("checkoutform");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "login.html";
            alert("Checkout success!");
        });
    }

    const loginForm = document.getElementById("loginform");
    if (loginForm) {
        loginForm.addEventListener("submit", function saveCredentials(event) {
    event.preventDefault(); // Prevent form from submitting
    const userData = {
        1: {
            "email": "clariz@domain.com",
            "name": "CLA",
            "password": "password"
        },
        2: {
            "email": "vegeta@domain.com",
            "name": "Vegeta",
            "password": "password"
        },
        3: {
            "email": "onizuka@domain.com",
            "name": "Onizuka",
            "password": "password"
        }
    };

    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password exist in userData
    let userExists = false;
    let userName = '';
    for (let key in userData) {
        if (userData[key].email === email && userData[key].password === password) {
            userExists = true;
            userName = userData[key].name;
            break;
        }
    }

    if (userExists) {
        alert('User authenticated!');
        // Save email and password in local storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('name', userName);

        window.location.href = "login.html";
    } else {
        alert('Invalid email or password!');
        window.location.reload();
    }
});
    }
});

function showLogin() {
    let login = document.getElementById('login');
    login.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeLogin() {
    let login = document.getElementById('login');
    login.style.display = "none";
    document.body.style.overflow = "unset";
}

function checkUsernameOnLoad() {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
        return storedEmail;
    } else {
        return null;
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function goback() {
    window.location.href = "login.html";
}
