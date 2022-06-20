import { getPaints, setOrderProperty } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.id === "paints") {
        const optionValue = parseInt(event.target.value) 
        setOrderProperty("paintId", optionValue)
    }
})

const paints = getPaints()

export const paintsDropdownMenu = () => {
    let HTML = `<select id="paints"><option value="0">Select a paint color...</option>`

    for (const paint of paints) {
        HTML += `<option value="${paint.id}">${paint.color}</option>`
    }

    HTML += `</select>`

    return HTML
}