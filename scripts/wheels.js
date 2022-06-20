import { getWheels } from "./database.js"

const wheels = getWheels()

export const wheelsDropdownMenu = () => {
    let HTML = `<select id="wheels"><option value="0">Select an wheel type...</option>`

    for (const wheel of wheels) {
        HTML += `<option value="${wheel.id}">${wheel.type}</option>`
    }

    HTML += `</select>`

    return HTML
}