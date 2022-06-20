import { getPaints, setOrderProperty } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.id === "paints") {
        const optionValue = parseInt(event.target.value) 
        setOrderProperty("paintId", optionValue)
    }
})

const paints = getPaints()

export const paintsDropdownMenu = () => {
    let html = `<select id="paints"><option value="0">Select a paint color...</option>`

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += `</select>`

    return html
}