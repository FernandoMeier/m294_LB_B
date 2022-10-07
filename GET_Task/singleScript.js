const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerHTML = cellText;
    return cell
}

const addTask = (task) => {
    const display = document.getElementById("display");
    const tablerow = document.createElement("tr");
    
    tablerow.append(
        createCell(task.id),
        createCell(task.title),
        createCell(task.completed),
        createCell(`<button type="button" id="delete" onClick="onDelete(${task.id})"><img src="/imgs/icons8-unwiederuflich-löschen-48.png" alt=""></button>`),
        createCell(`<button type="button" id="edit" onClick="onEdit(${task.id})"><img src="/imgs/icons8-edit-48.png" alt=""></button>`)
    )

    display.appendChild(tablerow)
}

function onDelete(deleteID) {
const id = deleteID;
fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {"Content-Type":"application/json"}
});
}

function onEdit(EditID) {
const newInfo = {title: `${prompt("Neuer Inhalt")}`, completed: `${prompt("Erledigt?", "true oder false")}`, id: EditID};
fetch(`http://127.0.0.1:3000/auth/cookie/tasks`, {
    method: "PUT",
    credentials: "include",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(newInfo)
});
location.reload();
}


document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const taskFormData = new FormData(taskForm);
        alert(taskFormData.get("identifier"))

        fetch(`http://127.0.0.1:3000/auth/cookie/task/${taskFormData.get("identifier")}`, {
            credentials: "include"
        })
            .then((response) => {
                if(response.status === 404) {
                    alert("task not found")
                }
                return response.json();
            })
            .then((data) => {
                addTask(data)
            })
    });
});