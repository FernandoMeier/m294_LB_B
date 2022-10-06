function renderTask(tasks) {
    const tableBody = document.querySelector("tbody")
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr");
        tableRow.append(createCell(task.id))
    })
}

const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell
}

function indexTask() {
    fetch("http://localhost:300/tasks")
        .then(response => response.json())
        .then(data => renderTask(data))
}

document.addEventListener("DOMContentLoaded", () => {
    indexTask();
})