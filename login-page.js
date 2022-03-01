const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "teacher" && password === "teacherFlashcards") {
        alert("You have successfully logged in.");
        window.location = "https://lstalet.github.io/ComputerScienceIA-teacherSide/";
    } 
    if (username === "student" && password === "studentFlashcards") {
        alert("You have successfully logged in.");
        window.location = "https://lstalet.github.io/ComputerScienceIA-studentSide/";
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})