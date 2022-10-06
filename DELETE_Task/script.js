document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");

    taskForm.addEventListener("submit", () => {
        const taskFormData = new FormData(taskForm);

        fetch(`http://localhost:3000/task/${taskFormData.get("identifier")}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(result => {
            if (result.ok) { alert("Your task was deleted successfully") }
            else { alert("There was and error deleting your task, your ID may be invalid") }
            return result
        })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    });
});