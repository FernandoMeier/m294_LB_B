document.addEventListener("DOMContentLoaded", function () {
    checkLogged();

    document.getElementById("login").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email_input").value
        const password = document.getElementById("password_input").value
        const login = {email, password}

        fetch("http://127.0.0.1:3000/auth/cookie/login", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(login)
        }).then(() => checkLogged())
    })
})

function checkLogged() {
    const elementWhenNotLoggedIn = document.getElementById("notLoggedIn")

    fetch("http://127.0.0.1:3000/auth/cookie/status", {
        credentials: "include"
    })
    .then((response) => {
        if(response.status === 401) {
            elementWhenNotLoggedIn.classList.add("hidden")
        } else {
            window.location.href = "/menu/index.html";
        }
    })
}