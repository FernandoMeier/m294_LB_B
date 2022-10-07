function indexTask() {
    fetch("http://127.0.0.1:3000/auth/cookie/tasks")
        .then(response => response.json())
        .then(data => renderTask(data))
}

function createTask(task) {

    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        } ,
        body: JSON.stringify(task)
    }).then(result => {
        if (result.ok) { alert("Your task was updated successfully") }
        else { alert("There was and error updating your task, your ID may be invalid") }
        return result
    })
}

const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell
}

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    document.addEventListener("submit", () => {
        indexTask();
        createTask({title: taskInput.value, completed: document.getElementById("statusInput").value, id: document.getElementById("identifier").value})
    })
})

function renderTask(tasks) {
    const tableBody = document.querySelector("tbody")
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr");
        tableRow.append(createCell(task.id))
    })
}