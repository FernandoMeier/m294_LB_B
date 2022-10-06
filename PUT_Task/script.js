document.addEventListener("DOMContentLoaded", () => {
    const taskForm = {
        title: getElementById("taskInput").value,
        completed: getElementById("status").value
    };

    document.addEventListener("submit", (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/tasks", {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(taskForm)
        })
        .then(result => {
            if (result.ok) { console.log("Your task was updated successfully") }
            else { console.log("there was an error updating your task, your ID may be invalid") }
            return result
        })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    });
});
