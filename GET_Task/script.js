const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell
}

const addTask = (task) => {

    for(let inde = 0; inde <= task.length - 1; inde++) {
        const display = document.getElementById("display");
        const tableRow = document.createElement("tr");
        tableRow.append(
            createCell(task[inde].id),
            createCell(task[inde].title),
            createCell(task[inde].completed)
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