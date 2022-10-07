function indexTask() {
    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        credentials: "include"
    })
        .then(response => response.json())
        .then(data => renderTask(data))
}

function createTask(task) {
    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        } ,
        body: JSON.stringify(task)
    }).then(result => {
        if(result.ok) {
            alert("task created successfully")
        } else {
            alert("there was an error creating the task")
        }
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
        createTask({title: taskInput.value})
    })
})

function renderTask(tasks) {
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr");
        tableRow.append(createCell(task.id))
    })
}