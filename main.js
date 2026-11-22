const getCharacters = async (category) =>{
    const response = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${category}.json`)
    const characters = await response.json()

    const characterList = document.getElementById("character-list")
    characterList.innerHTML = ""
    characters.forEach(character => {
        const li = document.createElement("li")  
        li.innerHTML = `
        <img src="https://ihatov08.github.io${character.image}" alt="${character.name}">
        <p>${character.name}</p>
        <p>${character.category}</p>
        `
        characterList.appendChild(li)
    })
}

const radioButtons = document.querySelectorAll("input[name='category']")
radioButtons.forEach(radio => {
    radio.addEventListener("change", (e) => {
        getCharacters(e.target.value)
    })
})

getCharacters("all")
// getCharacters("hashira")
// getCharacters("oni")
// getCharacters("kisatsutai")
