const getCharacters = async (category) => {
    const loading = document.getElementById("loading")
    const characterList = document.getElementById("character-list")

    characterList.innerHTML = ""
    loading.style.display = "block"

    try {
        const response = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${category}.json`)
        const characters = await response.json()

        characters.forEach(character => {
            const li = document.createElement("li")
            li.innerHTML = `
            <img src="https://ihatov08.github.io${character.image}" alt="${character.name}">
            <p>${character.name}</p>
            <p>${character.category}</p>
            `
            characterList.appendChild(li)
        })
    } catch (error) {
        console.error("エラーが発生しました", error)
    } finally {
        loading.style.display = "none"
    }
}

const radioButtons = document.querySelectorAll("input[name='category']")
radioButtons.forEach(radio => {
    radio.addEventListener("change", (e) => {
        getCharacters(e.target.value)
    })
})

getCharacters("all")