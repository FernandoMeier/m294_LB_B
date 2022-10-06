const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerHTML = cellText;
    return cell
}

function onDelete(deleteID) {
    const id = deleteID;
    fetch(`http://localhost:3000/task/${id}`, {
       method: "DELETE",
       headers: {"Content-Type":"application/json"}
    });
}

function onEdit(EditID) {
    const newInfo = {title: `${prompt("neuer Inhalt")}`, completed: false, id: EditID};
    fetch(`http://localhost:3000/tasks`, {
       method: "PUT",
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify(newInfo)
    });
}

const addTask = (task) => {

    for(let inde = 0; inde <= task.length - 1; inde++) {
        const display = document.getElementById("display");
        const tableRow = document.createElement("tr");
        tableRow.append(
            createCell(task[inde].id),
            createCell(task[inde].title),
            createCell(task[inde].completed),
            createCell(`<button type="button" id="delete" onClick="onDelete(${task[inde].id})"> Delete an Item </button>`),
            createCell(`<button type="button" id="edit" onClick="onEdit(${task[inde].id})"> Edit an Item </button>`)
        )
        display.appendChild(tableRow);
    }

    
}

document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3000/tasks")
    .then((response)=> {
        return response.json();
    })
    .then((data) =>{
        addTask(data)
    })

});