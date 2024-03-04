const human = document.getElementById(`human`)
const animal = document.getElementById(`animal`)
const img = document.getElementById(`img`)
const container = document.getElementById(`container`)
const humans = document.getElementById(`humansesh`)
const animals = document.getElementById(`animalsesh`)

human.addEventListener('click', async () => {
    const response = fetch(`https://api.waifu.pics/nsfw/waifu`)
    const data = await response
    const json = await data.json()
    img.src = json.url
})

animal.addEventListener('click', async () => {
    const response = fetch(`https://api.waifu.pics/nsfw/neko`)
    const data = await response
    const json = await data.json()
    img.src = json.url
})

humans.addEventListener('click', async () => {
    setInterval(async () => {
        const response = fetch(`https://api.waifu.pics/nsfw/waifu`)
        const data = await response
        const json = await data.json()
        img.src = json.url
    }, 2000)
})

animals.addEventListener('click', async () => {
    setInterval(async () => {
        const response = fetch(`https://api.waifu.pics/nsfw/neko`)
        const data = await response
        const json = await data.json()
        img.src = json.url
    }, 2000)
})