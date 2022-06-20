import { getInteriors, setOrderProperty } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.id === "interiors") {
        const optionValue = parseInt(event.target.value) 
        setOrderProperty("interiorId", optionValue)
    }
})

const interiors = getInteriors()

export const interiorsDropdownMenu = () => {
    let html = `<select id="interiors"><option value="0">Select an interior material...</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.material}</option>`
    }

    html += `</select>`

    return html
}