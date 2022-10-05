
let pokeData;

document.addEventListener("DOMContentLoaded", () => {
    const pokeIdInput = document.getElementById("IdInput");

    pokeIdInput.addEventListener("blur", () => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("IdInput").value)
            .then((response) => {
                response.json();
                alert("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("IdInput").value)
            })
            .then((data) => {
                pokeData = data;
                give_poke()
                alert(data)
            });
        function give_poke() {
            if(pokeData) {
                const pokeEntry = pokeData.name;
                nameInput.value = pokeEntry.name;
            }
        }
        
    })
});

