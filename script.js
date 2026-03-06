// sob issues ekhane save thakbe
let allIssues = [];

// kon tab selected ache
let currentTab = "all";


// ================================
//         LOGIN
// ================================

function handleLogin() {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    // console.log(username, password);

    if (username === "admin" && password === "admin123") {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("login-error").classList.add("hidden");
        loadAllIssues();
    } else {
        document.getElementById("login-error").classList.remove("hidden");
    }
}

// enter press e login
document.getElementById("password-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleLogin();
    }
});

