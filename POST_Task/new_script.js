document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const payload = new FormData(form);

        console.log([...payload])

        fetch("http://localhost:3000/tasks", {
            method: "POST",
            body: payload
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    })
})
