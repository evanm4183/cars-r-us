import { getInteriors, setOrderProperty } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.id === "interiors") {
        const optionValue = parseInt(event.target.value) 
        setOrderProperty("interiorId", optionValue)
    }
})

const interiors = getInteriors()

export const interiorsDropdownMenu = () => {
    let HTML = `<select id="interiors"><option value="0">Select an interior material...</option>`

    for (const interior of interiors) {
        HTML += `<option value="${interior.id}">${interior.material}</option>`
    }

    HTML += `</select>`

    return HTML
}