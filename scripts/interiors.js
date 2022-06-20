import { getInteriors } from "./database.js"

const interiors = getInteriors()

export const interiorsDropdownMenu = () => {
    let HTML = `<select id="interiors"><option value="0">Select an interior material...</option>`

    for (const interior of interiors) {
        HTML += `<option value="${interior.id}">${interior.material}</option>`
    }

    HTML += `</select>`

    return HTML
}