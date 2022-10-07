const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerHTML = cellText;
    return cell
}

function onDelete(deleteID) {
    const id = deleteID;
    fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`, {
       method: "DELETE",
       credentials: "include",
       headers: {"Content-Type":"application/json"}
    });
    location.reload();
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

const addTask = (task) => {

    for(let inde = 0; inde <= task.length - 1; inde++) {
        const display = document.getElementById("display");
        const tableRow = document.createElement("tr");
        tableRow.append(
            createCell(task[inde].id),
            createCell(task[inde].title),
            createCell(task[inde].completed),
            createCell(`<button type="button" id="delete" onClick="onDelete(${task[inde].id})"><img src="/imgs/icons8-unwiederuflich-löschen-48.png" alt=""></button>`),
            createCell(`<button type="button" id="edit" onClick="onEdit(${task[inde].id})"><img src="/imgs/icons8-edit-48.png" alt=""></button>`)
        )
        display.appendChild(tableRow);
    }

    
}

document.addEventListener("DOMContentLoaded", () => {

    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        credentials: "include"
    })
    .then((response)=> {
        return response.json();
    })
    .then((data) =>{
        addTask(data)
    })
});