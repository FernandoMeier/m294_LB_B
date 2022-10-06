document.addEventListener("DOMContentLoaded", () => {
    const pokemonForm = document.getElementById("pokemonForm");

    pokemonForm.addEventListener("submit", () => {
        const pokemonFormData = new FormData(pokemonForm);

        fetch(`http://localhost:3000/task/${pokemonFormData.get("identifier")}`, {
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