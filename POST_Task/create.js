function indexTask() {
    fetch("http://localhost:3000/tasks")
        .then(response => response.json())
        .then(data => renderTask(data))
}

function createTask(task) {
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        } ,
        body: JSON.stringify(task)
    }).then()
}

const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell
}

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    document.addEventListener("submit", event => {
        event.preventDefault();
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