const getCharacters = async (category) =>{
    const response = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${category}.json`)
    const characters = await response.json()
    console.log(characters)
}

getCharacters("all")
getCharacters("hashira")
getCharacters("oni")
getCharacters("kisatsutai")
