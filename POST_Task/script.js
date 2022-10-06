document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm");

    form.addEventListener("submit", handleSubmit)

    function handleSubmit() {
        
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 2,
                title: document.getElementById("taskInput"),
                completed: false
            })
        }) 

        .then((response)=> {
            return response.json();
        })
        .then((data) =>{
            console.log(data)
        })
    }
});